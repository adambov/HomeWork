function triangleNums(num){
    
    for (let i = 1; i <= num; i++) {
        let line = '';
        // console.log(i);
        for (let j = 1; j <= i; j++) {
            line += i;
            if (j !== i){
                line += ' ';
            } 
        }
        console.log(line);
    }
}

// triangleNums(3);
// triangleNums(5);
triangleNums(6);
