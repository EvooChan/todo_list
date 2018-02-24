var todoElements = [];
todoElements.render = function () {
   code = ''
   this.forEach(function(element, index) { code +=  '<div class="body">' + '<input type="radio" id="'+index+'" name="'+index+'" class="left" />' + '<label for="' + index + '"><span></span></label>' + '<input type="radio" id="'+index+1 +'" name="'+index+'" class="right" />' + '<label for="' + index+1 + '"><span></span></label>' +
   element.text + '</div>'})
   document.getElementById('table').innerHTML = code;
   document.getElementById('Task').value = '';
}


function Addiction() {
	
	
var text = document.getElementById('Task').value;
var obj = {text: text};
todoElements.push(obj)
todoElements.render()

}
