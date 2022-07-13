// 6. Password Validator
// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

function passValidator(password) {
    let counterNums = 0;
    let countersLetter = 0;
   // create funtion to check if between 6 - 10 characters (inclusive)
   function isPassBetweenSixAndTen (strPass) {
        return strPass.length >= 6 && strPass.length <= 10; 
   }
   // create a function to check if there are only digits and letters - use ASCII
   // use forof to go through the elements
   function isOnlyNumsAndDigs(strPass) {
        for (let charPassIndex of strPass) {
            let charPass = charPassIndex.charCodeAt(0);
                if (
                !(charPass >= 48 && charPass <= 57) &&
                !(charPass >= 65 && charPass <= 90) &&
                !(charPass >= 97 && charPass <= 122)) {
                    return false;
                };     
        };
        return true;
   }

   function hasMoreThanTwodigs(strPass) {
        let counter = 0;
        for (const index of strPass) {
            let charPass = index.charCodeAt(0);
            if (charPass >= 48 && charPass <= 57) {
                counter++;
            } 
            if (counter >= 2){
                return true
            }
        }
   }
    
   let passLengthCheck = isPassBetweenSixAndTen(password);
   let digitsLettersCheck = isOnlyNumsAndDigs(password);
   let digitsCountcheck = hasMoreThanTwodigs(password);

   if (passLengthCheck === true && digitsLettersCheck === true && digitsCountcheck === true) {
        console.log("Password is valid");
   }

   if (!passLengthCheck) {
        console.log("Password must be between 6 and 10 characters");
   };
   if (!digitsLettersCheck) {
    console.log("Password must consist only of letters and digits");
   };
   if (!digitsCountcheck) {
    console.log("Password must have at least 2 digits");
   };

};


passValidator('logIn');
passValidator('MyPass123');
passValidator('Pa$s$s');