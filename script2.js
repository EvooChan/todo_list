var todoElements = [];
var obj = {};
var flt = 1;
var filterRender = '<div class="top1"><select size="1" id="Filter" onchange="filterBy()">'+
    '<option disabled>Filter By</option>'+
    '<option  value="all">All</option>'+
    '<option value="inProgress">In Progress</option>'+
    '<option value="done">Done</option>'+
   '</select></div>';   
 var bot = '<div class="bots"><div class="bot"><input type="text" class="text1" id="Task"></div><div class="bot1">'+
   '<input type="button" class ="button" value="Добавить" id="add" onclick='+'Addiction()'+'> </div>';  
   
function filterBy() {
	var filter = document.getElementById("Filter").options.selectedIndex;
	flt = filter;
	console.log(filter);
   todoElements.render();
}

todoElements.check = function (){
	this.forEach(function(element,index) {var radio = document.getElementsByName(index);
	if(radio[0].checked==true){element.done = 'in progress';}
else if(radio[1].checked==true){element.done= 'done';}
else if(radio[2].checked==true){todoElements.splice(index, 1); todoElements.render();}
	})};

todoElements.render = function () {
	
   code = ''
   this.forEach(function(element, index) {
var inProgress = '<div class="body">' + '<span class="eltext">' + '<input type="radio" checked onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="inProgress"/>' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="done" onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   '<input type="radio" onclick="todoElements.check()" id="'+index+2+'" name="'+index+'" class="delete"/>'+'<label for="' + index+2 + '"><span></span></label>' +
   element.text + '</span>'+ '</div>';
var done = '<div class="body">' + '<span class="eltext">' + '<input type="radio" onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="inProgress" />' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="done" checked onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   '<input type="radio" onclick="todoElements.check()" id="'+index+2+'" name="'+index+'" class="delete"/>'+'<label for="' + index+2 + '"><span></span></label>' +
   element.text + '</span>'+ '</div>';
var created = '<div class="body">' + '<span class="eltext">' + '<input type="radio"  onclick="todoElements.check()" id="'+index+
   '" name="'+index+'" class="inProgress"/>' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +
   '" name="'+index+'" class="done" onclick="todoElements.check()" />' + '<label for="' + index+1 + '"><span></span></label>' + 
   '<input type="radio" onclick="todoElements.check()" id="'+index+2+'" name="'+index+'" class="delete"/>'+'<label for="' + index+2 + '"><span></span></label>' +
   element.text + '</span></div>'; 
	   if( flt == 1) {
	   if (element.done == 'in progress') {code += inProgress;}
   else if (element.done == 'done') {code += done;}
   else{code += created;}
   filterRender = '<div class="top1"><select size="1" id="Filter" onchange="filterBy()">'+
    '<option disabled>Filter By</option>'+
    '<option selected value="all">All</option>'+
    '<option value="inProgress">In Progress</option>'+
    '<option value="done">Done</option>'+
   '</select></div>';
   bot = '<div class="bots"><div class="bot"><input type="text" class="text1" id="Task"></div><div class="bot1">'+
   '<input type="button" class ="button" value="Добавить" id="add" onclick='+'Addiction()'+'> </div>';  }
   
   else if (flt ==2) {
	   if (element.done == 'in progress'){code += inProgress;};
	   filterRender = '<div class="top1"><select size="1" id="Filter" onchange="filterBy()">'+
    '<option disabled>Filter By</option>'+
    '<option value="all">All</option>'+
    '<option selected value="inProgress">In Progress</option>'+
    '<option value="done">Done</option>'+
   '</select></div>';
   bot = '<div class="bots"><div class="bot"></div><div class="bot1"></div>';
   }
   else if (flt == 3) {
	   if (element.done == 'done') {code += done;};
	   filterRender = '<div class="top1"><select size="1" id="Filter" onchange="filterBy()">'+
    '<option disabled>Filter By</option>'+
    '<option value="all">All</option>'+
    '<option value="inProgress">In Progress</option>'+
    '<option selected value="done">Done</option>'+
   '</select></div>';
   bot = '<div class="bots"><div class="bot"></div><div class="bot1"></div>';  
   }
   
   })
   if (code==='') {flt =1; bot = '<div class="bots"><div class="bot"><input type="text" class="text1" id="Task"></div><div class="bot1">'+
   '<input type="button" class ="button" value="Добавить" id="add" onclick='+'Addiction()'+'> </div>';
   filterRender = '<div class="top1"><select size="1" id="Filter" onchange="filterBy()">'+
    '<option disabled>Filter By</option>'+
    '<option selected value="all">All</option>'+
    '<option value="inProgress">In Progress</option>'+
    '<option value="done">Done</option>'+
   '</select></div>';todoElements.render();}
   document.getElementById('table').innerHTML='<div class="top"><img src="checked.jpg">'+
   ' - In progress <span class="toppic"></span> - Done <img src="x.jpg"> - Delete</div><div class="top1">To Do List</div>' +
 filterRender + code + bot;
 if (flt == 1){document.getElementById('Task').value = '';}
 
}


function Addiction() {	
var text = document.getElementById('Task').value;
if(text == "") {alert('Сначала напиши задание!')}
	else {
	obj = {text: text};
todoElements.push(obj)
	todoElements.render()}
}
