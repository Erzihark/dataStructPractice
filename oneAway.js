function oneAway(str, subStr){

    let hash = new Map()
    let counter = 0;
    let longStr;
    let shortStr;

    //Determines which string is longer
    if (str.length > subStr.length){
        longStr = str;
        shortStr = subStr;
    }
    else{
        longStr = subStr;
        shortStr = str;
    }

    //We throw each letter of the longer string into a hash table
    for (let i = 0; i < longStr.length; i++){

        let letter = longStr[i]

        if(!hash.has(letter)){
            hash.set(letter, 1);
        }
        else{
            newCount = hash.get(letter) + 1;
            hash.set(letter, newCount);
        }
    }
    //We compare the smaller string to the big one and reduce the letter count
    ///For every matching letter
    //The idea is that at least longStr.length - 1 letters from the small string must
    //Match with the big string for it to be 1 edit away
    for (let i = 0; i < shortStr.length; i++){
        
        let letter = shortStr[i]
        
        if(hash.has(letter)){

            newCount = hash.get(letter) - 1;
            hash.set(letter, newCount);
        }
    }

    for (let value of hash.values()){
        counter += value;
    }

    if (counter == 1){
        console.log("The strings are ", counter, " edit away");
    }
    else{
        console.log("The strings aren't one edit away");
    }
    
    
}
oneAway("word", "bord");