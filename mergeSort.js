function mergeSort(arr){

let half = arr.length / 2 

if (arr.length < 2){
    return arr;
}

let left = arr.splice(0, half)

return merge(mergeSort(left), mergeSort(arr));

}

function merge(left, right){
    let a = [];

    while (left.length > 0 && right.length > 0){
        if (left[0] > right[0]){
            a.push(right.shift());
        }
        else{
            a.push(left.shift())
        }
    }
    //concatenates a + left + right
    let cat = [...a, ...left, ...right];
    console.log(cat);
    return cat;

}

let array = [6, 5, 4, 3, 2, 1]
mergeSort(array);
console.log();