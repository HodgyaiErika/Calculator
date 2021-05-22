console.log(1111)
function handelButtonClick(value){
	console.log('button clicked',value)
	let currentValue=	document.getElementById('output').innerHTML
	console.log(currentValue)
		if (currentValue === '0'){
		document.getElementById('output').innerHTML=value
	} else{
		document.getElementById('output').innerHTML=currentValue + value
	}
}
function clearCalculator(clear){
	document.getElementById('output').innerHTML='0'
}
function egalButton(value){
	let valueOne=document.getElementById('output').innerHTML
	console.log(valueOne)
	let valueFinal= eval(valueOne)
	document.getElementById('output').innerHTML=valueFinal
}
function percentAge(){
	let valueOne=document.getElementById('output').innerHTML
	let valueFinaltwo=valueOne/100
	document.getElementById('output').innerHTML=valueFinaltwo
}
