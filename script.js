var todoElements = [];
var obj = {};

todoElements.check = function (){
	this.forEach(function(element,index) {var radio = document.getElementsByName(index);
	if(radio[0].checked==true){element.done = 'one';}
else if(radio[1].checked==true){element.done= 'two';}
else if(radio[2].checked==true){todoElements.splice(index, 1); todoElements.render();}})};

todoElements.render = function () {
   code = ''
   this.forEach(function(element, index) {
	   if (element.done == 'one') {code += '<div class="body">' + '<span class="eltext">' + '<input type="radio" checked onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="left"/>' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   '<input type="radio" onclick="todoElements.check()" id="'+index+2+'" name="'+index+'" class="rr"/>'+'<label for="' + index+2 + '"><span></span></label>' +
   element.text + '</span>'+ '</div>'}

   else if (element.done == 'two') {code += '<div class="body">' + '<span class="eltext">' + '<input type="radio" onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="left" />' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" checked onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   '<input type="radio" onclick="todoElements.check()" id="'+index+2+'" name="'+index+'" class="rr"/>'+'<label for="' + index+2 + '"><span></span></label>' +
   element.text + '</span>'+ '</div>'}
   
   else{
   code += '<div class="body">' + '<span class="eltext">' + '<input type="radio"  onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="left"/>' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   '<input type="radio" onclick="todoElements.check()" id="'+index+2+'" name="'+index+'" class="rr"/>'+'<label for="' + index+2 + '"><span></span></label>' +
   element.text + '</span></div>'}})
   document.getElementById('table').innerHTML='<div class="top"><img src="checked.jpg">'+
   ' - In progress <span class="toppic"></span> - Done <img src="x.jpg"> - Delete</div><div class="top1">To Do List</div>' + 
   code +  '<div class="bots"><div class="bot"><input type="text" class="text1" id="Task"></div><div class="bot1">'+
   '<input type="button" class ="button" value="Добавить" id="add" onclick='+'Addiction()'+'> </div>';
   document.getElementById('Task').value = '';
}

function Addiction() {	
var text = document.getElementById('Task').value;
if(text == "") {alert('Сначала напиши задание!')}
	else {
	obj = {text: text};
todoElements.push(obj)
	todoElements.render()}
}
