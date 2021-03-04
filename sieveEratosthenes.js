function sieveEratosthenes(num){

    let arr = {};
    //We assign all numbers as ojects with propery true
    for (let i = 2; i < num + 1; i++) {
        arr[i] = true;     
    }

    //We start at i=2, square it, and then, every i spaces, we turn 
    // the number to false, so not a prime, we repeat the process 
    // With i=3, then i=4 and so on and so forth 
    let i = 2;
    while (i < Math.sqrt(num)){
        if (arr[i] == true){
            let j = Math.pow(i, 2);
            while(j <= num){
                arr[j] = false;      
                j += i;
            }
        }
        i++;
    }
    //Here we remove all objects whose property was set to false
    for (let i in arr){
        let num = arr[i];
        if (num == false){
            delete arr[i];
        }
    }
    console.log(arr);
}

sieveEratosthenes(100);