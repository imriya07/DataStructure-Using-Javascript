function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(0,mid));
    return mergeSort(left, right);
}

mergeSort([10,24,88,99]);