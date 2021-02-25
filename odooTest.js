// Convierte un número de punto flotante (en donde la parte del exponente representa las horas y la fracción los minutos) a un número entero que representa el tiempo en segundos.

function floatToIntTime(time){

    let answ = 0;
    let int = 0;
    let dec = 0;
    
    //we split the integer and decimal parts, multiply them by a const to obtain their minute equivalent
    int = Math.floor(time);
    dec = (time % 1) * 10;
    //we multiply the hours by 60 to get minutes, then add the minutes and finally sum and multiply both by 60 to get seconds
    answ = ((int * 60) + (dec)) * 60;
    console.log(answ);


}
//floatToIntTime(15.7);  //This takes O(1) time


// Remueve todas las palabras duplicadas de un a cadena de caracteres (no se permite el uso de funciones que ya están incluidas en una biblioteca programática que cumplan con esta operación)

function removeDupWords(str){

    let arr = [];
    let word = "";
    let sentence = "";

    //first we push words (we consider a word to be split by spaces) into an array
    for (let i = 0; i < str.length; i++)
    {
        // We know the word is finished when we reach a space, so we push it if it hasn't been seen before
        if (str.charAt(i) == " " && !arr.includes(word)){

                arr.push(word);
                sentence = sentence + " " + word;
                word = "";
        }
        // If the array has the word, then we reset word
        if (arr.includes(word)){
            word = "";
        }

        // this prefents spaces from being added into the split words
        if (str.charAt(i) != " "){
            word += str.charAt(i);
        }   

        // This pushes the last word in the string, since our method pushes when a space is found
        if (i == str.length - 1 && !arr.includes(word)){
            arr.push(word);
            sentence = sentence + " " + word;
        }

        
    }
    console.log(sentence);
    
}

// removeDupWords("Hello Hello world how are you you are") 
//This takes O(N) time

// Escribe una solución recursiva para remover palabras duplicadas en posición consecutiva de una cadena de caracteres (no permite el uso de funciones que ya están incluidas en una biblioteca programática que cumplan con esta operación)

function removeDupAdjWords(str){

    let arr = [];
    let word = "";
    let sentence = "";

    //first we push words (we consider a word to be split by spaces) into an array
    for (let i = 0; i < str.length; i++)
    {
        // We know the word is finished when we reach a space, so we push it if it hasn't been seen before
        // If the current word is equal to the last one introduced, then we dont push it
        if (str.charAt(i) == " " && word != arr[arr.length - 1]){

                arr.push(word);
                sentence = sentence + " " + word;
                word = "";
        }
        // Resets word when the last one was the same as the current
        if (word == arr[arr.length - 1]){
            word = "";
        }

        // this prevents spaces from being added into the split words
        if (str.charAt(i) != " "){
            word += str.charAt(i);
        }   

        // This pushes the last word in the string, since our method pushes when a space is found
        if (i == str.length - 1 && word != arr[arr.length - 1]){
            arr.push(word);
            console.log("pushed last word:" + word);
            sentence = sentence + " " + word;
        }
        console.log( word);

        
    }
    console.log(sentence);
    
}
//removeDupAdjWords("Hello Hello world how are you you are are");
//This takes O(n) time

// Encuentra la longitud del arreglo más pequeño de un arreglo que es entrado como una cadena de caracteres que contiene subarreglos de números enteros.

function smallestSubarray(array){

    //arbitrary long int so that any array length is smaller than it
    smallArrayL = 100;
    //iterates through every element of the array and assigns the length of the smallest one to the variable smallArrayL
    for (let i = 0; i < array.length; i ++){

        if (array[i].length < smallArrayL){
            smallArrayL = array[i].length;
        }

    }
    console.log (smallArrayL);
}

//smallestSubarray([[1, 3, 4], [2, 1], [1, 4, 5, 6], [1, 1, 1]]); 
//This takes O(N) time (N = array.length)

//Escribe un regex que puede corresponder a todas las ocurrencias de caracteres que no son precedidos inmediatamente por una vocal.


function selectWord(word) {
    // We check for matches whereas the string is not preceded by a vocal
    let newWord = (new RegExp('\w*(?<![aeiou])'));
    console.log(newWord.test(word));
  } 

  selectWord("sdfg sdf sd sdfg");

  //Esta información incluye el número de orden, nombre del cliente, dirección del cliente, 
  //nombres de productos ordenados, precio de producto ordenado, imagen del producto ordenado,
  // categoría del producto ordenado, monto total de la orden y impuestos.

  /*CREATE DATABASE shoppingCart;
  CREATE TABLE carts (
      orderId bigserial,
      name varchar(25),
      lastname varchar(50),
      adress varchar(50),
      productName varchar(25),
      productPrice numeric,
      productCategory varchar(25),
      orderTotal numeric,
      tax numeric
  );*/

