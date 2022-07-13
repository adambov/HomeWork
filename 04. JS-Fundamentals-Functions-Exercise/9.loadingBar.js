// 9. Loading Bar
// You will receive a single number between 0 and 100, which is divided with 10 without residue 
// (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar 
// depending on the number you have received in the input.

function loadingBar(loadPercentage) {
    //според числото, което получзвам трябва в един масив да изписвам знака за процент
    // ако числото е 30 изписвам 3 пъти знака за процент и соатаналото са точки
    // това показва колко е заредил лоудинг бара
    // един варинат:
    //30% [%%%.......]
    // Still loading...
    // втори вариант:
    //100% Complete!
    //1. функция която да му дели инпут числото на 10
    //2. фор цикъл, който да ми принтира в  масив толкова знака за процент,
    // колкото е резултата от делението в предната функция и останалото да са точки
    let division = function (dividedLoadPercentage) {
        let result = loadPercentage / 10;
        // console.log(result)
        return result;
    };
    let outcomeArr = [];
    let differenceTenToResult = 10 - division();
    for (let index = 0; index < division(); index++) {
            outcomeArr.push('%');
    }
    for (let k = 0; k < differenceTenToResult; k++) {
        outcomeArr.push('.');
    }
    if (loadPercentage === 100) {
        console.log('100% Complete!');
        console.log(`${loadPercentage}%  [${outcomeArr.join('')}]`);
    } else {
        console.log(`${loadPercentage}%  [${outcomeArr.join('')}]`);
        console.log(`Still loading...`)
    }
    
}

loadingBar(30);
loadingBar(50);
loadingBar(100);