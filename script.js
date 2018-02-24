var todoElements = [];


todoElements.render = function () {
   code = ''
   this.forEach(function(element, index) { code += '<div class="body">' + '<span class="eltext">' + '<input type="radio" id="'+index+'" name="'+index+'" class="left" />' + 
   '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +'" name="'+index+'" class="right" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   element.text + '</span>'+ '</div>'})
   document.getElementById('table').innerHTML = document.getElementById('table').innerHTML='<div class="top"><img src="checked.jpg"> - In progress <span class="toppic"></span> - Done</div><div class="top1">To Do List</div>' + 
   code +  '<div class="bots"><div class="bot"><input type="text" class="text1" id="Task"></div><div class="bot1">'+'<input type="button" class ="button" value="Добавить" id="add" onclick='+'Addiction()'+'> </div>';
   document.getElementById('Task').value = '';
}


function Addiction() {
	
	
var text = document.getElementById('Task').value;
if(text == "") {alert('Сначала напиши задание!')}
	else {
	var obj = {text: text};
todoElements.push(obj)
	todoElements.render()}

}
