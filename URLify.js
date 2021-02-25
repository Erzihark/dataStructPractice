function URLify(str, trueLength){
    let spaceCount = 0;
    let index = 0;
    let i = 0;
    
    for (i = 0; i < trueLength; i++){
        if (str[i] == " "){
            spaceCount++;   
        }
    }

    index = trueLength + spaceCount * 2;
    if (trueLength < str.length) {str[trueLength] = "\0";} //End array
        for (i = trueLength - 1; i >= 0; i--){
            if (str[i] == " "){
                str[index - 1] = "0";
                str[index - 2] = "2";
                str[index - 3] = "%";
                index = index - 3;
                console.log(str[index - 1]);
                console.log(str[index - 2]);
                console.log(str[index - 3]);
                
            } else{
                str[index - 1] = str[i];
                index--;
                
            }
            console.log(str.length, str);
     }
    
    
}

URLify("Mr John Smith    ", 13);