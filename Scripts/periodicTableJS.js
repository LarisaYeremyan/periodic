onload = function () {
	var container = new TableCell(document.getElementById('container'));

	for (var i = 0; i < table.length; i++) {
		for (var j = 0; j < table[i].length; j++) {
			container.create(table[i][j]);
		}
	}
}

function TableCell(container) {
	this.create = function (tableElement) {
		var element = document.createElement('div');

		if(tableElement.row == LAST_ROW) {
			element.className = tableElement.class + String.SPACE + 'lastElement' ;

			var elementName = document.createElement('div');
			elementName.className = 'name';
			elementName.innerHTML = tableElement.name;
			element.appendChild(elementName);	
						
			element.addEventListener('mouseover', mouseOverHandler);
			element.addEventListener('mouseleave', mouseLeaveHandler);	
			element.addEventListener('click', mouseClickHandler);
		}
		else {
			element.className = tableElement.class + String.SPACE + 'element' ;				

			var elementNumber = document.createElement('div');
			elementNumber.className = 'number';
			elementNumber.textContent = tableElement.number;
			element.appendChild(elementNumber);

			var elementSymbol = document.createElement('div');
			elementSymbol.className = 'symbol';
			elementSymbol.textContent = tableElement.symbol;
			element.appendChild(elementSymbol);

			var elementName = document.createElement('div');
			elementName.className = 'name';
			elementName.innerHTML = tableElement.name;
			element.appendChild(elementName);

			var elementMass = document.createElement('div');
			elementMass.className = 'mass';
			elementMass.innerHTML = tableElement.mass;
			element.appendChild(elementMass);

			element.addEventListener('mouseover', mouseOverElementHandler);			
		}

		element.style.backgroundColor = 'rgba(0, 127, 127,' + (Math.random() * 0.5 + 0.25) + ')';
		element.style.position = 'absolute';
		elementLeft = (tableElement.column - 1) * (ELEMENT_WIDTH + SHIFT);

		elementTop = (tableElement.row - 1) * (ELEMENT_HEIGHT + SHIFT);
		switch (tableElement.row) { 
			case LAST_ROW -2:				
				elementTop = elementTop + ADD_HEIGHT;
				break;		
			case LAST_ROW - 1:
				elementTop = elementTop + ADD_HEIGHT;
				break;
			case LAST_ROW:
				elementTop = elementTop + 2 * ADD_HEIGHT;
				elementLeft = (tableElement.column - 1) * (LAST_ROW_ELEMENT_WIDTH + SHIFT);				
		}
		element.style.left = elementLeft + 'px';
		element.style.top = elementTop + 'px';

		container.appendChild(element);

		function mouseClickHandler() {
			var divs = document.getElementsByClassName('element');
			for(var i = 0; i < divs.length; i++) {
				var childrens = divs[i].children;	
				var div = divs[i].style;			
				if(divs[i].className.split(String.SPACE)[0] == this.className.split(String.SPACE)[0]) {
					div.borderColor = 'rgba(127, 255, 255, .75)';
					div.transform = 'scale( 1 )';

					for(var j = 0; j < childrens.length; j++) {
						childrens[j].style.transform = 'scale( 1 )';
					}
				}
				else {
					div.borderColor = 'rgba(127, 255, 255, .25)';
					div.transform = 'scale( .4 )';	
					for(var j = 0; j < childrens.length; j++) {
						childrens[j].style.transform = 'scale( .4 )';
					}
				}
	 		}
		}
		
		function mouseOverHandler() {
			var divs = document.getElementsByClassName('element');
			for(var i = 0; i < divs.length; i++) {	
				var div = divs[i].style;				
				if(divs[i].className.split(String.SPACE)[0] == this.className.split(String.SPACE)[0]) {
					div.borderColor = 'rgba(255, 246, 204, 1)';
					div.animationDuration = '5s';
					div.animationFillMode = 'forwards';
					div.animationName = 'bubble-anim';
					div.animationIterationCount='infinite';					
				}
				else {
					div.borderColor = 'rgba(127, 255,2 55, .25)';
					div.animationName='';
				}
			}
		}

		function mouseLeaveHandler() {
			var divs = document.getElementsByClassName('element');
			for(var i = 0; i < divs.length; i++) {
				var childrens = divs[i].children;	
				var div = divs[i].style;		
				div.borderColor = 'rgba(127, 255, 255, .75)';
				div.transform = 'scale( 1 )';
				div.animationName='';
				 for(var j = 0; j < childrens.length; j++) {
				 	childrens[j].style.transform = 'scale( 1 )';
				 }
			}
		}

		function mouseOverElementHandler() {
			 var childrens = this.children;			

			 //document.getElementsByClassName('mousemove_rotate')[0].innerHTML=childrens[1].innerHTML;		


			var upperNumber = document.getElementsByClassName('upper_number');
			var upperSymbol = document.getElementsByClassName('upper_symbol');
			var upperName = document.getElementsByClassName('upper_name');
			var upperMass = document.getElementsByClassName('upper_mass');	

			upperNumber[0].innerHTML = childrens[0].innerHTML;				
			upperSymbol[0].innerHTML = childrens[1].innerHTML;
			upperName[0].innerHTML = childrens[2].innerHTML;
			upperMass[0].innerHTML = childrens[3].innerHTML;

		}		
	}
}
