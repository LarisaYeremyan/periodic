String.SPACE = ' ';
LAST_ROW = 10;
ELEMENT_WIDTH = 60;
ELEMENT_HEIGHT = 63;
ADD_HEIGHT = 10;
SHIFT = 4;
LAST_ROW_ELEMENT_WIDTH = 80;	

var table = [
	[
		{ number: 1, symbol: 'H', name: 'Водород', mass: '1.00794', column: 1, class: 'nonmetal', row: 1 },
		{ number: 2, symbol: 'He', name: 'Гелий', mass: '4.002602', column: 18, class: 'noble_gas', row: 1 }
	],		

	[
		{ number: 3, symbol: 'Li', name: 'Литий', mass: '6.941', column: 1, class: 'alkali_metal', row: 2 },
		{ number: 4, symbol: 'Be', name: 'Бериллий', mass: '9.012182', column: 2, class: 'alkali_metal', row: 2 },
		{ number: 5, symbol: 'B', name: 'Бор', mass: '10.811', column: 13, class: 'semi_metal', row: 2 },
		{ number: 6, symbol: 'C', name: 'Углерод', mass: '12.0107', column: 14, class: 'nonmetal', row: 2 },
		{ number: 7, symbol: 'N', name: 'Азот', mass: '14.0067', column: 15, class: 'nonmetal', row: 2 },
		{ number: 8, symbol: 'O', name: 'Кислород', mass: '15.9994', column: 16, class: 'nonmetal', row: 2 },
		{ number: 9, symbol: 'F', name: 'Фтор', mass: '18.9984032', column: 17, class: 'halogen', row: 2 },
		{ number: 10, symbol: 'Ne', name: 'Неон', mass: '20.1797', column: 18, class: 'noble_gas', row: 2 }
	],		

	[
		{ number: 11, symbol: 'Na', name: 'Натрий', mass: '22.98976...', column: 1, class: 'alkali_metal', row: 3 },
		{ number: 12, symbol: 'Mg', name: 'Магний', mass: '24.305', column: 2, class: 'alkaline_earth', row: 3 },
		{ number: 13, symbol: 'Al', name: 'Алюминий', mass: '26.9815386', column: 13, class: 'basic_metal', row: 3 },
		{ number: 14, symbol: 'Si', name: 'Кремний', mass: '28.0855', column: 14, class: 'semi_metal', row: 3 },
		{ number: 15, symbol: 'P', name: 'Фосфор', mass: '30.973762', column: 15, class: 'nonmetal', row: 3 },
		{ number: 16, symbol: 'S', name: 'Сера', mass: '32.065', column: 16, class: 'nonmetal', row: 3 },
		{ number: 17, symbol: 'Cl', name: 'Хлор', mass: '35.453', column: 17, class: 'halogen', row: 3 },
		{ number: 18, symbol: 'Ar', name: 'Аргон', mass: '39.948', column: 18, class: 'noble_gas', row: 3 }
	],		

	[
		{ number: 19, symbol: 'K', name: 'Калий', mass: '39.948', column: 1, class: 'alkali_metal', row: 4 },
		{ number: 20, symbol: 'Ca', name: 'Кальций', mass: '40.078', column: 2, class: 'alkaline_earth', row: 4 },
		{ number: 21, symbol: 'Sc', name: 'Скандий', mass: '44.955912', column: 3, class: 'transition_metal', row: 4 },
		{ number: 22, symbol: 'Ti', name: 'Титан', mass: '47.867', column: 4, class: 'transition_metal', row: 4 },
		{ number: 23, symbol: 'V', name: 'Ванадий', mass: '50.9415', column: 5, class: 'transition_metal', row: 4 },
		{ number: 24, symbol: 'Cr', name: 'Хром', mass: '51.9961', column: 6, class: 'transition_metal', row: 4 },
		{ number: 25, symbol: 'Mn', name: 'Марганец', mass: '54.938045', column: 7, class: 'transition_metal', row: 4 },
		{ number: 26, symbol: 'Fe', name: 'Железо', mass: '55.845', column: 8, class: 'transition_metal', row: 4 },
		{ number: 27, symbol: 'Co', name: 'Кобальт', mass: '58.933195', column: 9, class: 'transition_metal', row: 4 },
		{ number: 28, symbol: 'Ni', name: 'Никель', mass: '58.6934', column: 10, class: 'transition_metal', row: 4 },
		{ number: 29, symbol: 'Cu', name: 'Медь', mass: '63.546', column: 11, class: 'transition_metal', row: 4 },
		{ number: 30, symbol: 'Zn', name: 'Цинк', mass: '65.38',column: 12, class: 'transition_metal', row: 4 },
		{ number: 31, symbol: 'Ga', name: 'Галлий', mass: '69.723', column: 13, class: 'basic_metal', row: 4 },
		{ number: 32, symbol: 'Ge', name: 'Германий', mass: '72.63', column: 14, class: 'semi_metal', row: 4 },
		{ number: 33, symbol: 'As', name: 'Мышьяк', mass: '74.9216', column: 15, class: 'semi_metal', row: 4 },
		{ number: 34, symbol: 'Se', name: 'Селен', mass: '78.96', column: 16, class: 'nonmetal', row: 4 },
		{ number: 35, symbol: 'Br', name: 'Бром', mass: '79.904', column: 17, class: 'halogen', row: 4 },
		{ number: 36, symbol: 'Kr', name: 'Криптон', mass: '83.798', column: 18, class: 'noble_gas', row: 4 }
	],		

	[
		{ number: 37, symbol: 'Rb', name: 'Рубидий', mass: '85.4678', column: 1, class: 'alkali_metal', row: 5 },
		{ number: 38, symbol: 'Sr', name: 'Стронций', mass: '87.62', column: 2, class: 'alkaline_earth', row: 5 },
		{ number: 39, symbol: 'Y', name: 'Иттрий', mass: '88.90585', column: 3, class: 'transition_metal', row: 5 },
		{ number: 40, symbol: 'Zr', name: 'Цирконий', mass: '91.224', column: 4, class: 'transition_metal', row: 5 },
		{ number: 41, symbol: 'Nb', name: 'Ниобий', mass: '92.90628', column: 5, class: 'transition_metal', row: 5 },
		{ number: 42, symbol: 'Mo', name: 'Молибден', mass: '95.96', column: 6, class: 'transition_metal', row: 5 },
		{ number: 43, symbol: 'Tc', name: 'Технеций', mass: '(98)', column: 7, class: 'transition_metal', row: 5 },
		{ number: 44, symbol: 'Ru', name: 'Рутений', mass: '101.07', column: 8, class: 'transition_metal', row: 5 },
		{ number: 45, symbol: 'Rh', name: 'Родий', mass: '102.9055', column: 9, class: 'transition_metal', row: 5 },
		{ number: 46, symbol: 'Pd', name: 'Палладий', mass: '106.42', column: 10, class: 'transition_metal', row: 5 },
		{ number: 47, symbol: 'Ag', name: 'Серебро', mass: '107.8682', column: 11, class: 'transition_metal', row: 5 },
		{ number: 48, symbol: 'Cd', name: 'Кадмий', mass: '112.411', column: 12, class: 'transition_metal', row: 5 },
		{ number: 49, symbol: 'In', name: 'Индий', mass: '114.818', column: 13, class: 'basic_metal', row: 5 },
		{ number: 50, symbol: 'Sn', name: 'Олово', mass: '118.71', column: 14, class: 'basic_metal', row: 5 },
		{ number: 51, symbol: 'Sb', name: 'Сурьма', mass: '121.76', column: 15, class: 'semi_metal', row: 5 },
		{ number: 52, symbol: 'Te', name: 'Теллур', mass: '127.6', column: 16, class: 'semi_metal', row: 5 },
		{ number: 53, symbol: 'I', name: 'Иод', mass: '126.90447', column: 17, class: 'halogen', row: 5 },
		{ number: 54, symbol: 'Xe', name: 'Ксенон', mass: '131.293', column: 18, class: 'noble_gas', row: 5 }
	],		

	[
		{ number: 55, symbol: 'Cs', name: 'Цезий', mass: '132.9054', column: 1, class: 'alkali_metal', row: 6 },
		{ number: 56, symbol: 'Ba', name: 'Барий', mass: '132.9054', column: 2, class: 'alkaline_earth', row: 6 },
		{ number: 72, symbol: 'Hf', name: 'Гафний', mass: '178.49', column: 4, class: 'transition_metal', row: 6 },
		{ number: 73, symbol: 'Ta', name: 'Тантал', mass: '180.94788', column: 5, class: 'transition_metal', row: 6 },
		{ number: 74, symbol: 'W', name: 'Вольфрам', mass: '183.84', column: 6, class: 'transition_metal', row: 6 },
		{ number: 75, symbol: 'Re', name: 'Рений', mass: '186.207', column: 7, class: 'transition_metal', row: 6 },
		{ number: 76, symbol: 'Os', name: 'Осмий', mass: '190.23', column: 8, class: 'transition_metal', row: 6 },
		{ number: 77, symbol: 'Ir', name: 'Иридий', mass: '192.217', column: 9, class: 'transition_metal', row: 6 },
		{ number: 78, symbol: 'Pt', name: 'Платина', mass: '195.084', column: 10, class: 'transition_metal', row: 6 },
		{ number: 79, symbol: 'Au', name: 'Золото', mass: '196.966569', column: 11, class: 'transition_metal', row: 6 },
		{ number: 80, symbol: 'Hg', name: 'Ртуть', mass: '200.59', column: 12, class: 'transition_metal', row: 6 },
		{ number: 81, symbol: 'Tl', name: 'Таллий', mass: '204.3833', column: 13, class: 'basic_metal', row: 6 },
		{ number: 82, symbol: 'Pb', name: 'Свинец', mass: '207.2', column: 14, class: 'basic_metal', row: 6 },
		{ number: 83, symbol: 'Bi', name: 'Висмут', mass: '208.9804', column: 15, class: 'basic_metal', row: 6 },
		{ number: 84, symbol: 'Po', name: 'Полоний', mass: '(209)', column: 16, class: 'semi_metal', row: 6 },
		{ number: 85, symbol: 'At', name: 'Астат', mass: '(210)', column: 17, class: 'halogen', row: 6 },
		{ number: 86, symbol: 'Rn', name: 'Радон', mass: '(222)', column: 18, class: 'noble_gas', row: 6 }
	],		

	[
		{ number: 87, symbol: 'Fr', name: 'Франций', mass: '(223)', column: 1, class: 'alkali_metal', row: 7 },
		{ number: 88, symbol: 'Ra', name: 'Радий', mass: '(226)', column: 2, class: 'alkaline_earth', row: 7 },
		{ number: 104, symbol: 'Rf', name: 'Резерфордий', mass: '(267)', column: 4, class: 'transition_metal', row: 7 },
		{ number: 105, symbol: 'Db', name: 'Дубний', mass: '(268)', column: 5, class: 'transition_metal', row: 7 },
		{ number: 106, symbol: 'Sg', name: 'Сиборгий', mass: '(271)', column: 6, class: 'transition_metal', row: 7 },
		{ number: 107, symbol: 'Bh', name: 'Борий', mass: '(272)', column: 7, class: 'transition_metal', row: 7 },
		{ number: 108, symbol: 'Hs', name: 'Хассий', mass: '(270)', column: 8, class: 'transition_metal', row: 7 },
		{ number: 109, symbol: 'Mt', name: 'Мейтнерий', mass: '(276)', column: 9, class: 'transition_metal', row: 7 },
		{ number: 110, symbol: 'Ds', name: 'Дармштадтий', mass: '(281)', column: 10, class: 'transition_metal', row: 7 },
		{ number: 111, symbol: 'Rg', name: 'Рентгений', mass: '(280)', column: 11, class: 'transition_metal', row: 7 },
		{ number: 112, symbol: 'Cn', name: 'Коперниций', mass: '(285)', column: 12, class: 'transition_metal', row: 7 },
		{ number: 113, symbol: 'Uut',name: 'Унунтрий', mass: '(284)', column: 13, class: 'basic_metal', row: 7 },
		{ number: 114, symbol: 'Fl', name: 'Флеровий', mass: '(289)', column: 14, class: 'basic_metal', row: 7 },
		{ number: 115, symbol: 'Uup',name: 'Унунпентий', mass: '(288)', column: 15, class: 'basic_metal', row: 7 },
		{ number: 116, symbol: 'Lv', name: 'Ливерморий', mass: '(293)', column: 16, class: 'basic_metal', row: 7 },
		{ number: 117, symbol: 'Uus',name: 'Унунсептий', mass: '(294)', column: 17, class: 'halogen', row: 7 },
		{ number: 118, symbol: 'Uuo',name: 'Унуноктий', mass: '(294)', column: 18, class: 'noble_gas', row: 7 }
	],		

	[	
		{ number: 57, symbol: 'La', name: 'Лантан', mass: '138.90547', column: 2, class: 'lanthanide', row: 8 },
		{ number: 58, symbol: 'Ce', name: 'Церий', mass: '140.116', column: 3, class: 'lanthanide', row: 8 },
		{ number: 59, symbol: 'Pr', name: 'Празеодим', mass: '140.90765', column: 4, class: 'lanthanide', row: 8 },
		{ number: 60, symbol: 'Nd', name: 'Неодим', mass: '144.242', column: 5, class: 'lanthanide', row: 8 },
		{ number: 61, symbol: 'Pm', name: 'Прометий', mass: '(145)', column: 6, class: 'lanthanide', row: 8 },
		{ number: 62, symbol: 'Sm', name: 'Самарий', mass: '150.36', column: 7, class: 'lanthanide', row: 8 },
		{ number: 63, symbol: 'Eu', name: 'Европий', mass: '151.964', column: 8, class: 'lanthanide', row: 8 },
		{ number: 64, symbol: 'Gd', name: 'Гадолиний', mass: '157.25', column: 9, class: 'lanthanide', row: 8 },
		{ number: 65, symbol: 'Tb', name: 'Тербий', mass: '158.92535', column: 10, class: 'lanthanide', row: 8 },
		{ number: 66, symbol: 'Dy', name: 'Диспрозий', mass: '162.5', column: 11, class: 'lanthanide', row: 8 },
		{ number: 67, symbol: 'Ho', name: 'Гольмий', mass: '164.93032', column: 12, class: 'lanthanide', row: 8 },
		{ number: 68, symbol: 'Er', name: 'Эрбий', mass: '167.259', column: 13, class: 'lanthanide', row: 8 },
		{ number: 69, symbol: 'Tm', name: 'Тулий', mass: '168.93421', column: 14, class: 'lanthanide', row: 8 },
		{ number: 70, symbol: 'Yb', name: 'Иттербий', mass: '173.054', column: 15, class: 'lanthanide', row: 8 },
		{ number: 71, symbol: 'Lu', name: 'Лютеций', mass: '174.9668', column: 16, class: 'lanthanide', row: 8 }
	],		
		
	[
		{ number: 89, symbol: 'Ac', name: 'Актиний', mass: '(227)', column: 2, class: 'actinide', row: 9 },
		{ number: 90, symbol: 'Th', name: 'Торий', mass: '232.03806', column: 3, class: 'actinide', row: 9 },
		{ number: 91, symbol: 'Pa', name: 'Протактиний', mass: '231.0588', column: 4, class: 'actinide', row: 9 },
		{ number: 92, symbol: 'U', name: 'Уран', mass: '238.02891', column: 5, class: 'actinide', row: 9 },
		{ number: 93, symbol: 'Np', name: 'Нептуний', mass: '(237)', column: 6, class: 'actinide', row: 9 },
		{ number: 94, symbol: 'Pu', name: 'Плутоний', mass: '(244)', column: 7, class: 'actinide', row: 9 },
		{ number: 95, symbol: 'Am', name: 'Америций', mass: '(243)', column: 8, class: 'actinide', row: 9 },
		{ number: 96, symbol: 'Cm', name: 'Кюрий', mass: '(247)', column: 9, class: 'actinide', row: 9 },
		{ number: 97, symbol: 'Bk', name: 'Берклий', mass: '(247)', column: 10, class: 'actinide', row: 9 },
		{ number: 98, symbol: 'Cf', name: 'Калифорний', mass: '(251)', column: 11, class: 'actinide', row: 9 },
		{ number: 99, symbol: 'Es', name: 'Эйнштейний', mass: '(252)', column: 12, class: 'actinide', row: 9 },
		{ number: 100, symbol: 'Fm', name: 'Фермий', mass: '(257)', column: 13, class: 'actinide', row: 9 },
		{ number: 101, symbol: 'Md', name: 'Менделевий', mass: '(258)', column: 14, class: 'actinide', row: 9 },
		{ number: 102, symbol: 'No', name: 'Нобелий', mass: '(259)', column: 15, class: 'actinide', row: 9 },
		{ number: 103, symbol: 'Lr', name: 'Лоуренсий', mass: '(262)', column: 16, class: 'actinide', row: 9 }
	],		

	[
		{ number: '', symbol: '', name: 'Щелочные металлы', mass: '', column: 3, class: 'alkali_metal', row: 10 },
		{ number: '', symbol: '', name: 'Щёлочноземельные металлы', mass: '', column: 4, class: 'alkaline_earth', row: 10 },
		{ number: '', symbol: '', name: 'Переходные металлы', mass: '', column: 5, class: 'transition_metal', row: 10 },
		{ number: '', symbol: '', name: 'Постпереходные металлы', mass: '', column: 6, class: 'basic_metal', row: 10 },
		{ number: '', symbol: '', name: 'Полуметаллы', mass: '', column: 7, class: 'semi_metal', row: 10 },
		{ number: '', symbol: '', name: 'Неметаллы', mass: '', column: 8, class: 'nonmetal', row: 10 },
		{ number: '', symbol: '', name: 'Галогены', mass: '', column: 9, class: 'halogen', row: 10 },
		{ number: '', symbol: '', name: 'Благородные газы', mass: '', column: 10, class: 'noble_gas', row: 10 },
		{ number: '', symbol: '', name: 'Лантаноиды', mass: '', column: 11, class: 'lanthanide', row: 10 },
		{ number: '', symbol: '', name: 'Актиноиды', mass: '', column: 12, class: 'actinide', row: 10 }
	]
];