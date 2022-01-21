var rulers = [
	["асПАРуХ",681, 700 ],
	["тЕРвеЛ", 700,718 ],
	["СеВаР", 738,753],
	["телЕРИГ", 766,777],
	["каРДАм", 777, 803],
	["крум", 803,814 ],
	["ОмурТАг",814,831],
];
let longerYears;
let years = 0;

for (let i = 0; i < rulers.length; i++) {
    let ruleTime = rulers[i][2] - rulers[i][1];
    if( ruleTime > 15){
        years = ruleTime
        console.log(`${rulers[i][0]} е управлявал ${years} години.`)
    }
  
}
