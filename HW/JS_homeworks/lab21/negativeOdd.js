let array = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];

console.log('The negative odd array elements are:');

for (let i = array[0]; i <= array.length; i++) {
    const element = array[i];
    if((element < 0) && (element % 2 !==0)){
        console.log(element)
    }
}

