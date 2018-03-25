 var obj = {};
 var appData = {rows: todoElements=[], filter: 1}; 

function Addiction() {	
    var text = document.getElementById('Task').value;
    if(text == "") {alert('Сначала напиши задание!')}
	else {
	obj = {text: text};
    appData.rows.push(obj)
	render();}
}

function inProgress(){appData.rows[this.id].done='in progress';};
function done(){var a=(this.id-'1')/10;appData.rows[a].done='done';};
function del(){var a=(this.id-'2')/10;appData.rows.splice(a,1); render();};

function filterBy() {
	var filter = document.getElementById("Filter").options.selectedIndex;
	appData.filter = filter;
    render();
}

  render = function () {
	var table = document.getElementById('table');
	var top = document.createElement("div");
	var top1 = document.createElement("div");
	var top2 = document.createElement("div");
	var select = document.createElement("select");
	var bot = document.getElementById('bots');
	var options = ["Filter By","All","In Progress","Done"];
	
  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
	if (i===0){option.disabled = true;};
    select.appendChild(option);
}
	if (appData.filter == 1) {select.selectedIndex = 1}
	else if (appData.filter == 2) {select.selectedIndex = 2}
	else if (appData.filter == 3) {select.selectedIndex = 3}
	
	   select.id = 'Filter';
	   select.setAttribute('size', 1);
	   top.className = 'top';
	   top.innerHTML = '<img src="checked.jpg"> - In progress <span class="toppic"></span> - Done <img src="x.jpg"> - Delete';
	   top1.className = 'top1';
	   top1.innerHTML ='To Do List';
	   top2.className = 'top1';
	   top2.appendChild(select);
	   
	  
	   
  while (table.firstChild.className != 'bots') {table.removeChild(table.firstChild)};
	   table.insertBefore(top2, bot);
	   table.insertBefore(top1, top2);
	   table.insertBefore(top, top1);
	
  appData.rows.forEach(function(element, index) {
    var newDiv = document.createElement("div");
	var spanT = document.createElement("span");
	var radio = document.createElement("input");
	var radio1 = document.createElement("input");
	var radio2 = document.createElement("input");
	var label = document.createElement("label");
	var label1 = document.createElement("label");
	var label2 = document.createElement("label");
	
       label.setAttribute('for', index);
	   label1.setAttribute('for', index+'1');
	   label2.setAttribute('for', index+'2');
	
	   radio.type = "radio";
	   radio.name = index;
	   radio.id = index;
	   radio.className = "inProgress";
	   
	   radio1.type = "radio";
	   radio1.name = index;
	   radio1.id = index+'1';
	   radio1.className = "done";
	   
	   radio2.type = "radio";
	   radio2.name = index;
	   radio2.id = index+'2';
	   radio2.className = "delete";
	   
	   newDiv.className = 'body';
	   spanT.className = 'eltext';
	   
    if(element.done == 'done') { radio1.setAttribute('checked', true);}
    else if (element.done == 'in progress') { radio.setAttribute('checked', true);};
	   
	   label.innerHTML='<span></span>';
	   label1.innerHTML='<span></span>';
	   label2.innerHTML='<span></span>';
	  
	   spanT.appendChild(radio);
	   spanT.appendChild(label);
	   spanT.appendChild(radio1);
	   spanT.appendChild(label1);
	   spanT.appendChild(radio2);
	   spanT.appendChild(label2);
	   
	if (appData.filter == 2) {
	   if(element.done == 'in progress'){
	   spanT.innerHTML += element.text;
       newDiv.appendChild(spanT);
       table.insertBefore(newDiv, bot);
	    document.getElementById(index).addEventListener("click", inProgress, false);
        document.getElementById(index+'1').addEventListener("click", done, false);
        document.getElementById(index+'2').addEventListener("click", del, false);
	   }
	}
	else if (appData.filter == 3) {
	   if(element.done == 'done'){
	   spanT.innerHTML += element.text;
       newDiv.appendChild(spanT);
       table.insertBefore(newDiv, bot);
	    document.getElementById(index).addEventListener("click", inProgress, false);
        document.getElementById(index+'1').addEventListener("click", done, false);
        document.getElementById(index+'2').addEventListener("click", del, false);
	   }
	}
	else if (appData.filter == 1) {
	   spanT.innerHTML += element.text;
       newDiv.appendChild(spanT);
       table.insertBefore(newDiv, bot);
	    document.getElementById(index).addEventListener("click", inProgress, false);
        document.getElementById(index+'1').addEventListener("click", done, false);
        document.getElementById(index+'2').addEventListener("click", del, false);
	}
  }) 
        document.getElementById('Filter').addEventListener("change", filterBy, false);  
        document.getElementById('Task').value = '';  
 }
 
        document.getElementById("add").addEventListener("click", Addiction, false);