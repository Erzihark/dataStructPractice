function partition(arr, l, r){
    let pivot = arr[Math.floor((l + r)/2)];
    while(l <= r){
        while(arr[l] < pivot){
            l++;
        }
        while(arr[r] > pivot){
            r--;
        }
        if (l <= r){
            let temp = arr[r];
            arr[r] = arr[l];
            arr[l] = temp;
            l++;
            r--;
        }
    }
    return l;
}

function quickSort(arr, l, r){
    let index;
    if (arr.length > 1){
        index = partition(arr, l, r);
        if (l < index - 1){
            quickSort(arr, l, index - 1);
        }
        if (r > index){
            quickSort(arr, index, r);
        }
    }
    return arr;
}

console.log(quickSort([5, 3, 7, 11, 2], 0, 4));