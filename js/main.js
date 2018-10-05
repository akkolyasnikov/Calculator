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
	}
})
	
 $('#mul').on('click', function (event){	
		$('button').css({backgroundColor: '#354859'})
		$('#result').keyup()
		inputNull()
 })

 $('#result').on('keyup', function(event){
	$("#mul").val('1'); //прошли расчет один раз
	var flag = parseInt($("#mul").val())
	this.style.color = 'black'; //показали наш итог
})
 	
 function squarePrice(){  //Считаем стоимость за кв.м
 	width = parseInt($('#width'))
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