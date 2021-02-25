function checkPalindrome(str){

    let hash = new Map();
    let oddCounter = 0;

    //store each letter iteration in a hash table
    //We exclude spaces
    for (let i = 0; i < str.length; i++){
        if (!hash.has(str[i]) && str[i] != " "){
            hash.set(str[i], 1);
        }
        else if (str[i] != " "){
            newCount = hash.get(str[i]) + 1;
            hash.set(str[i], newCount);
        }
    }

    //We check if each letter repeats itself only once, or if theres only one letter that doesnt
    for (let ammount of hash.keys()){
        const cases = hash.get(ammount);
        if (cases % 2 != 0){
            console.log(cases);
            oddCounter ++;
        }
    }

    if (oddCounter > 1){
        console.log(str + " is not a palindrome")
        return false;
    }
    else 
    console.log(str + " is a palindrome");
    return true;
}

checkPalindrome("taco cat");