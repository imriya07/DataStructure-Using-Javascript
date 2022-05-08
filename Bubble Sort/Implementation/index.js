function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        //console.log("ONE PASS COMPLETE!");
    }
    return arr;
}

bubbleSort([37,45,9,7]);     