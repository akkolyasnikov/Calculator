 $(function(){

 $('.type').on('click', function(){
	var priceVal = $(this).val()
	var priceGet = $('#result').val()
	var flag = parseInt($("#mul").val())
	if(flag=='1') //если прошли один расчет
	{
		$("#mul").val('0');		
		$('#result').val(priceVal)	
		$('#result').css('color','white')//скрыли итог	
		
		this.style.backgroundColor = '#483D8B'
	
	} 
	else
	{
		if (priceGet=="")
		{
			$('#result').val(priceVal) 
		} 
		else
		{	
			var priceResult = parseInt(priceVal)+parseInt(priceGet)
			var resultNew = priceResult * squarePrice()
			$('#result').val(resultNew)
			console.log(resultNew)
		}
		$('#result').css('color','white')//скрыли итог
		this.style.backgroundColor = '#483D8B'	//цвет активной кнопки	
		/**
		 * Так не надо делать. Проблема в том, что возможны конфликты css и js стилей. 
		 * Это концепция разделения логики и представления. 
		 * Здесь стоит не меняеть цвет кнопки, а дать её класс, для которого описано цвет в css, 
		 * с учетом отношений класса обычной кнопки и подсвеченной.
		 * Не очень хорошо редактировать напрямую стили, лучше через классы
		 */
	}
})
	
 $('#mul').on('click', function (event){	
		$('button').css({backgroundColor: '#354859'})
		$('#result').keyup()
		/**
		 * ^^^^^^^^^^^^^^^^^
		 * Не очень хорошая практика искуственно вызывать событие
		 * Правильное решение : 
		 * 	1) вынести все из обработчика события keyup в функцию
		 * 	2) Внутри обработка keyup вызывать функцию
		 * 	3) Здесь вызывать функцию
		 */
		inputNull()
 })

 $('#result').on('keyup', function(event){
	$("#mul").val('1'); //прошли расчет один раз
	var flag = parseInt($("#mul").val())
	this.style.color = 'black'; //показали наш итог
})
	/**
	*	Молодец, что выносишь такие действия в функции. 
	*/
 	
 function squarePrice(){  //Считаем стоимость за кв.м
 	width = parseInt($('#width'))   // 
 	var width = $('#width').val()
	height = parseInt($('#height'))
	var height = $('#height').val()
	square = width * height
	return square;
}

function inputNull(){ //обнуляем инпуты
	$('#height').val('')
	 $('#width').val('')
	 
}

})
