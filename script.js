var todoElements = [];
var obj = {};

todoElements.render = function () {
 
   code = ''
   this.forEach(function(element, index) {
	   if (element.done == 'one') {code += '<div class="body">' + '<span class="eltext">' + '<input type="radio" checked onclick="one()" id="'+index+
   '" name="'+index+'" class="left"/>' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" onclick="two()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   element.text + '</span>'+ '</div>'}

   else if (element.done == 'two') {code += '<div class="body">' + '<span class="eltext">' + '<input type="radio" onclick="one()" id="'+index+
   '" name="'+index+'" class="left" />' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" checked onclick="two()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   element.text + '</span>'+ '</div>'}
   
   else{
   code += '<div class="body">' + '<span class="eltext">' + '<input type="radio"  onclick="one()" id="'+index+
   '" name="'+index+'" class="left"/>' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" onclick="two()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   element.text + '</span>'+ '</div>'}})
   document.getElementById('table').innerHTML='<div class="top"><img src="checked.jpg">'+
   ' - In progress <span class="toppic"></span> - Done</div><div class="top1">To Do List</div>' + 
   code +  '<div class="bots"><div class="bot"><input type="text" class="text1" id="Task"></div><div class="bot1">'+
   '<input type="button" class ="button" value="Добавить" id="add" onclick='+'Addiction()'+'> </div>';
   document.getElementById('Task').value = '';
}

function two(element) {
	obj.done = 'two';
	todoElements.render();
};

function one(element) {
	element.done = 'one';
	todoElements.render();
};

function Addiction() {
	
	
var text = document.getElementById('Task').value;
if(text == "") {alert('Сначала напиши задание!')}
	else {
	obj = {text: text};
todoElements.push(obj)
	todoElements.render()}

}
