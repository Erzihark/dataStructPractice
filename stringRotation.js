let charsNum = 256;

function stringRotation(text, pattern){

    let concat = [];

    concat.push(text, text); //To determine if the substring is a rotation
    // we append str1 to itself, if a substring is found in this new str1
    // then it must be a rotation of the original str1
    let strCheck = concat.join(""); //parenthesis removes spaces
    console.log(strCheck);

    let match = true;
    let occurrences = [];
    let txtLen = strCheck.length;
    let patLen = pattern.length;

    for (let i = 0; i < txtLen - patLen + 1; i++){
  
        for (let j = 0; j < patLen; j++){
            match = true;
            console.log("Current text letter: " + strCheck[i+j] + ", current pattern letter: " + pattern[j])
            if (strCheck[i+j] != pattern[j]){
                match = false;
                break;
            }
        } 
        console.log(match);
        if (match == true)
            occurrences.push(i);
    }
    console.log(occurrences);
}

stringRotation("ABCDEF", "DEFABC");