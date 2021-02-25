function stringCompression(str){
    finalLength = countCompression(str);
    console.log(finalLength, " ", str.length);
    if (finalLength >= str.length) return str;

    // We declare the result as a StringBuilder to prevent copying unnecessary str
    let compressed = new Array(finalLength);
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++){
        countConsecutive++;
        //If next character is different than current we append current to result
        if (i + 1 >= str.length || str[i] != str[i + 1]){
            compressed.push(str[i]);
            compressed.push(countConsecutive);
            countConsecutive = 0;
        }
    }
    console.log(compressed.join(''));
}

function countCompression(str){
    let compressedLength = 0;
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++){
        countConsecutive++;
        //if next char is different than current, increase the length
        if (i + 1 >= str.length || str[i] != str[i + 1]){
            compressedLength += 1 + countConsecutive.toString().length;
            countConsecutive = 0;
        }
    }
    return compressedLength;
}


stringCompression("aggggggggggggg") //a2b1c5f1a3