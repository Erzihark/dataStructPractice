function mergeSort(arr){
    let half = arr.length / 2

    if (arr.length < 2){
        return arr;
    }

    //we divide the input array into 2 new ones, left and arr
    let left = arr.splice(0, half)
    console.log("left: ", left, "arr: ", arr, "\n");
    //we make a recursive call to reduce the arrays to 1 element
    //each (log n)
    return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right){
    let a = [];
    //we merge the remaining sorted arrays
    while (left.length > 0 && right.length > 0){
        if (left[0] > right[0]){
            a.push(right.shift());
        }
        else{
            a.push(left.shift())
        }
    }
    //concatenates a + left + right
    console.log("a", a);
    console.log("left", left);
    console.log("right", right);
    let cat = [...a, ...left, ...right];
    console.log("Cat", cat, "\n");
    return cat;

}

let array = [6, 5, 4, 3, 2, 1, 7]
mergeSort(array);