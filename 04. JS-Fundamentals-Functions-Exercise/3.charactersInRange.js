// 3. Characters in Range
// Write a function that receives two characters and prints on a single line 
//all the characters in between them according to the ASCII code. 
//Keep in mind that the second character code might be before the first one inside the ASCII table.

function charactersInRange(startChar, endChar) {
    let firstChar = Math.min(startChar.charCodeAt(0),endChar.charCodeAt(0));
    let secondChar = Math.max(startChar.charCodeAt(0),endChar.charCodeAt(0));
    let inBetweenChars = [];

    for (let i = firstChar + 1; i < secondChar; i++) {
        inBetweenChars.push(String.fromCharCode(i));
    }
    console.log(inBetweenChars.join(' '));
};

charactersInRange('a','d');
charactersInRange('#',':');
charactersInRange('C','#');


