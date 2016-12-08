var table = [
	"H", "Водород", "1.00794", 1, 1, "nonmetal",
	"He", "Гелий", "4.002602", 18, 1, "noble_gas",
	
	"Li", "Литий", "6.941", 1, 2, "alkali_metal",
	"Be", "Бериллий", "9.012182", 2, 2, "alkali_metal",
	"B", "Бор", "10.811", 13, 2, "semi_metal",
	"C", "Углерод", "12.0107", 14, 2, "nonmetal",
	"N", "Азот", "14.0067", 15, 2, "nonmetal",
	"O", "Кислород", "15.9994", 16, 2, "nonmetal",
	"F", "Фтор", "18.9984032", 17, 2, "halogen",
	"Ne", "Неон", "20.1797", 18, 2, "noble_gas",
	
	"Na", "Натрий", "22.98976...", 1, 3, "alkali_metal",
	"Mg", "Магний", "24.305", 2, 3, "alkaline_earth",
	"Al", "Алюминий", "26.9815386", 13, 3, "basic_metal",
	"Si", "Кремний", "28.0855", 14, 3, "semi_metal",
	"P", "Фосфор", "30.973762", 15, 3, "nonmetal",
	"S", "Сера", "32.065", 16, 3, "nonmetal",
	"Cl", "Хлор", "35.453", 17, 3, "halogen",
	"Ar", "Аргон", "39.948", 18, 3, "noble_gas",
	
	"K", "Калий", "39.948", 1, 4, "alkali_metal",
	"Ca", "Кальций", "40.078", 2, 4, "alkaline_earth",
	"Sc", "Скандий", "44.955912", 3, 4, "transition_metal",
	"Ti", "Титан", "47.867", 4, 4, "transition_metal",
	"V", "Ванадий", "50.9415", 5, 4, "transition_metal",
	"Cr", "Хром", "51.9961", 6, 4, "transition_metal",
	"Mn", "Марганец", "54.938045", 7, 4, "transition_metal",
	"Fe", "Железо", "55.845", 8, 4, "transition_metal",
	"Co", "Кобальт", "58.933195", 9, 4, "transition_metal",
	"Ni", "Никель", "58.6934", 10, 4, "transition_metal",
	"Cu", "Медь", "63.546", 11, 4, "transition_metal",
	"Zn", "Цинк", "65.38", 12, 4, "transition_metal",
	"Ga", "Галлий", "69.723", 13, 4, "basic_metal",
	"Ge", "Германий", "72.63", 14, 4, "semi_metal",
	"As", "Мышьяк", "74.9216", 15, 4, "semi_metal",
	"Se", "Селен", "78.96", 16, 4, "nonmetal",
	"Br", "Бром", "79.904", 17, 4, "halogen",
	"Kr", "Криптон", "83.798", 18, 4, "noble_gas",
	
	"Rb", "Рубидий", "85.4678", 1, 5, "alkali_metal",
	"Sr", "Стронций", "87.62", 2, 5, "alkaline_earth",
	"Y", "Иттрий", "88.90585", 3, 5, "transition_metal",
	"Zr", "Цирконий", "91.224", 4, 5, "transition_metal",
	"Nb", "Ниобий", "92.90628", 5, 5, "transition_metal",
	"Mo", "Молибден", "95.96", 6, 5, "transition_metal",
	"Tc", "Технеций", "(98)", 7, 5, "transition_metal",
	"Ru", "Рутений", "101.07", 8, 5, "transition_metal",
	"Rh", "Родий", "102.9055", 9, 5, "transition_metal",
	"Pd", "Палладий", "106.42", 10, 5, "transition_metal",
	"Ag", "Серебро", "107.8682", 11, 5, "transition_metal",
	"Cd", "Кадмий", "112.411", 12, 5, "transition_metal",
	"In", "Индий", "114.818", 13, 5, "basic_metal",
	"Sn", "Олово", "118.71", 14, 5, "basic_metal",
	"Sb", "Сурьма", "121.76", 15, 5, "semi_metal",
	"Te", "Теллур", "127.6", 16, 5, "semi_metal",
	"I", "Иод", "126.90447", 17, 5, "halogen",
	"Xe", "Ксенон", "131.293", 18, 5, "noble_gas",
	
	"Cs", "Цезий", "132.9054", 1, 6, "alkali_metal",
	"Ba", "Барий", "132.9054", 2, 6, "alkaline_earth",
	"Hf", "Гафний", "178.49", 4, 6, "transition_metal",
	"Ta", "Тантал", "180.94788", 5, 6, "transition_metal",
	"W", "Вольфрам", "183.84", 6, 6, "transition_metal",
	"Re", "Рений", "186.207", 7, 6, "transition_metal",
	"Os", "Осмий", "190.23", 8, 6, "transition_metal",
	"Ir", "Иридий", "192.217", 9, 6, "transition_metal",
	"Pt", "Платина", "195.084", 10, 6, "transition_metal",
	"Au", "Золото", "196.966569", 11, 6, "transition_metal",
	"Hg", "Ртуть", "200.59", 12, 6, "transition_metal",
	"Tl", "Таллий", "204.3833", 13, 6, "basic_metal",
	"Pb", "Свинец", "207.2", 14, 6, "basic_metal",
	"Bi", "Висмут", "208.9804", 15, 6, "basic_metal",
	"Po", "Полоний", "(209)", 16, 6, "semi_metal",
	"At", "Астат", "(210)", 17, 6, "halogen",
	"Rn", "Радон", "(222)", 18, 6, "noble_gas",
	
	"Fr", "Франций", "(223)", 1, 7, "alkali_metal",
	"Ra", "Радий", "(226)", 2, 7, "alkaline_earth",
	"Rf", "Резерфордий", "(267)", 4, 7, "transition_metal",
	"Db", "Дубний", "(268)", 5, 7, "transition_metal",
	"Sg", "Сиборгий", "(271)", 6, 7, "transition_metal",
	"Bh", "Борий", "(272)", 7, 7, "transition_metal",
	"Hs", "Хассий", "(270)", 8, 7, "transition_metal",
	"Mt", "Мейтнерий", "(276)", 9, 7, "transition_metal",
	"Ds", "Дармштадтий", "(281)", 10, 7, "transition_metal",
	"Rg", "Рентгений", "(280)", 11, 7, "transition_metal",
	"Cn", "Коперниций", "(285)", 12, 7, "transition_metal",
	"Uut", "Унунтрий", "(284)", 13, 7, "basic_metal",
	"Fl", "Флеровий", "(289)", 14, 7, "basic_metal",
	"Uup", "Унунпентий", "(288)", 15, 7, "basic_metal",
	"Lv", "Ливерморий", "(293)", 16, 7, "basic_metal",
	"Uus", "Унунсептий", "(294)", 17, 7, "halogen",
	"Uuo", "Унуноктий", "(294)", 18, 7,	 "noble_gas",
	
	"La", "Лантан", "138.90547", 2, 8, "lanthanide",
	"Ce", "Церий", "140.116", 3, 8, "lanthanide",
	"Pr", "Празеодим", "140.90765", 4, 8, "lanthanide",
	"Nd", "Неодим", "144.242", 5, 8, "lanthanide",
	"Pm", "Прометий", "(145)", 6, 8, "lanthanide",
	"Sm", "Самарий", "150.36", 7, 8, "lanthanide",
	"Eu", "Европий", "151.964", 8, 8, "lanthanide",
	"Gd", "Гадолиний", "157.25", 9, 8, "lanthanide",
	"Tb", "Тербий", "158.92535", 10, 8, "lanthanide",
	"Dy", "Диспрозий", "162.5", 11, 8, "lanthanide",
	"Ho", "Гольмий", "164.93032", 12, 8, "lanthanide",
	"Er", "Эрбий", "167.259", 13, 8, "lanthanide",
	"Tm", "Тулий", "168.93421", 14, 8, "lanthanide",
	"Yb", "Иттербий", "173.054", 15, 8, "lanthanide",
	"Lu", "Лютеций", "174.9668", 16, 8, "lanthanide",
	
	"Ac", "Актиний", "(227)", 2, 9, "actinide",
	"Th", "Торий", "232.03806", 3, 9, "actinide",
	"Pa", "Протактиний", "231.0588", 4, 9, "actinide",
	"U", "Уран", "238.02891", 5, 9, "actinide",
	"Np", "Нептуний", "(237)", 6, 9, "actinide",
	"Pu", "Плутоний", "(244)", 7, 9, "actinide",
	"Am", "Америций", "(243)", 8, 9, "actinide",
	"Cm", "Кюрий", "(247)", 9, 9, "actinide",
	"Bk", "Берклий", "(247)", 10, 9, "actinide",
	"Cf", "Калифорний", "(251)", 11, 9, "actinide",
	"Es", "Эйнштейний", "(252)", 12, 9, "actinide",
	"Fm", "Фермий", "(257)", 13, 9, "actinide",
	"Md", "Менделевий", "(258)", 14, 9, "actinide",
	"No", "Нобелий", "(259)", 15, 9, "actinide",
	"Lr", "Лоуренсий", "(262)", 16, 9, "actinide",

	"", "Щелочные металлы", "", 3, 10, "alkali_metal",
	"", "Щёлочноземельные металлы", "", 4, 10, "alkaline_earth",
	"", "Переходные металлы", "", 5, 10, "transition_metal",
	"", "Постпереходные металлы", "", 6, 10, "basic_metal",
	"", "Полуметаллы", "", 7, 10, "semi_metal",
	"", "Неметаллы", "", 8, 10, "nonmetal",
	"", "Галогены", "", 9, 10, "halogen",
	"", "Благородные газы", "", 10, 10, "noble_gas",
	"", "Лантаноиды", "", 11, 10, "lanthanide",
	"", "Актиноиды", "", 12, 10, "actinide"
	
];
window.onload = function () {
	var columns = table[3];
	for ( var i = 0; i < table.length; i += 6 ) {
		if(table[i + 3] > columns) {
			columns=table[i + 3]
		}
	}
	var rows = table[table.length -1];
	
	var elementWidth = 0;
	var elementHeight = 0;
	var addHeight = 0;
	var shift = 4;
	var	lastElementWidth =80;
	
	var elementLeft = 0; 
	var elementTop = 0;
	
	for ( var i = 0; i < table.length; i += 6 ) {
		if (table[i].length != 0 || table[i+1].length != 0) {
			var element = document.createElement('div');
			if(table[i].length != 0) {			
				element.className = 'element';
			}
			else {
				element.className = 'element1';
				element.addEventListener('mouseover', mouseOverHandler);
				element.addEventListener('mouseleave', mouseLeaveHandler);	
				element.addEventListener('click', mouseClickHandler);					
			}
			element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
			element.id = table[i + 5];	
			
			if(table[i].length != 0) {
				var number = document.createElement('div');
				number.className = 'number';
				number.textContent = (i/6) + 1;
				element.appendChild(number);
			}
			
			if(table[i + 1].length !=0) {			
				var symbol = document.createElement('div');
				symbol.className = 'symbol';
				symbol.textContent = table[i];
				element.appendChild(symbol);
			}
			
			if(table[i + 1].length !=0) {
				var details1 = document.createElement('div');
				details1.className = 'details1';
				details1.innerHTML = table[i + 1];
				element.appendChild(details1);
			}
			
			if(table[i + 2].length != 0) {			
				var details2 = document.createElement('div');
				details2.className = 'details2';
				details2.innerHTML = table[i + 2];
				element.appendChild(details2);
			}

			if(i == 0) {
				str = window.getComputedStyle(element).width;
				elementWidth = parseInt(str.substr(0,str.length-2));
				str = window.getComputedStyle(element).height;
				elementHeight = parseInt(str.substr(0,str.length-2));
				addHeight = elementHeight / 6;
			}	
			
			element.style.position = "absolute";
			elementLeft =  (table[i + 3] -1) * (elementWidth + shift);
			elementTop =  (table[i + 4] -1) * (elementHeight + shift);
			if(table[i + 4] == 8  || table[i + 4] == 9  || table[i + 4] == 10) {
				elementTop = elementTop + addHeight;
			} 
			if(table[i + 4] == 10) {
				elementTop = elementTop + addHeight;
				elementLeft =  (table[i + 3] -1) * (lastElementWidth + shift);
			} 
			element.style.left = elementLeft + 'px';
			element.style.top = elementTop + 'px';

			document.body.appendChild(element);
			document.getElementById("container").appendChild(element);
		}
	}
	function mouseClickHandler(){
		var divs = document.getElementsByClassName('element');
		for(var i = 0; i < divs.length; i++){
			var c = divs[i].children;			
			if(divs[i].id == this.id){
				divs[i].style.borderColor = 'rgba(127,255,255,0.75)';
				divs[i].style.transform = "scale(1)";

				for(var j=0; j<c.length;j++) {
					c[j].style.transform = "scale(1)";
				}
			}
			else {
				divs[i].style.borderColor = 'rgba(127,255,255,0.25)';
				divs[i].style.transform = "scale(0.4)";	
				for(var j=0; j<c.length;j++) {
					c[j].style.transform = "scale(0.4)";
				}
			}
 		}
	}
	
	function mouseOverHandler(){
		var divs = document.getElementsByClassName('element');
		for(var i = 0; i < divs.length; i++){		
			var c = divs[i].children;			
			if(divs[i].id == this.id){
				divs[i].style.borderColor = 'rgba(255,246,204,1)';
				divs[i].style.animationDuration = "5s";
				divs[i].style.animationFillMode = "forwards";
				divs[i].style.animationName = "bubble-anim";
				divs[i].style.animationIterationCount="infinite";					
				
				//divs[i].style.transform = "rotate(10deg)";
				//for(var j=0; j<c.length;j++) {
				//	c[j].style.transform = "rotate(10deg)";
				//}
			}
			else {
				divs[i].style.borderColor = 'rgba(127,255,255,0.25)';
				divs[i].style.animationName="";
				//divs[i].style.transform = "rotate(0deg)";
				//	for(var j=0; j<c.length;j++) {
					//c[j].style.transform = "rotate(0deg)";
				//}
			}
		}
	}

	
	function mouseLeaveHandler(){
		var divs = document.getElementsByClassName('element');
		for(var i = 0; i < divs.length; i++){
			var c = divs[i].children;			
			divs[i].style.borderColor = 'rgba(127,255,255,0.75)';
			divs[i].style.transform = "rotate(0deg)";
			for(var j=0; j<c.length;j++) {
				c[j].style.transform = "rotate(0deg)";
			}
		}
	}

}


