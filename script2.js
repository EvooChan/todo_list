var todoElements = [];
var obj = {};
var tasks = '';
var what = '';

todoElements.check = function (){
	this.forEach(function(element,index) {var radio = document.getElementsByName(index);
	if(radio[0].checked==true){element.done = 'one';}
else if(radio[1].checked==true){element.done= 'two';};})};

todoElements.render = function () {
   this.forEach(function(element, index) {
	   if (element.done == 'one') {element.code = '<div class="body" name="c" id="c'+index+'">' + '<span class="eltext">' + '<input type="radio" checked onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="left" />' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   element.text + '</span>'+ '</div>'}

   else if (element.done == 'two') {element.code = '<div class="body" name="c" id="c'+index+'">' + '<span class="eltext">' + '<input type="radio" onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="left" />' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" checked onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   element.text + '</span>'+ '</div>'}
   
   else{ 
   element.code = '<div class="body" name"c" id="c'+index+'">' + '<span class="eltext">' + '<input type="radio" id="'+index+
   '" name="'+index+'" class="left" onclick="todoElements.check()"/>' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="right" onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   element.text + '</span>'+ '</div>'}; })
   function Lcode () {
	   for(var i = 0; i < todoElements.length; i++) {var line = todoElements[i].code; var allLines = allLines + line + " ";}
	   tasks = allLines;
	   };
   Lcode();
   document.getElementById('table').innerHTML='<div class="top"><img src="checked.jpg">'+
   ' - In progress <span class="toppic"></span> - Done</div><div class="top1">To Do List</div>' + 
   tasks +  '<div class="bots"><div class="bot"><input type="text" class="text1" id="Task"></div><div class="bot1">'+
   '<input type="button" class ="button" value="Добавить" id="add" onclick='+'Addiction()'+'> </div>';
   document.getElementById('Task').value = '';
   todoElements.check();
}

function Addiction() {	
var text = document.getElementById('Task').value;
if(text == "") {alert('Сначала напиши задание!')}
	else {
	obj = {text: text,
	};
todoElements.push(obj)
	todoElements.render()}
}
