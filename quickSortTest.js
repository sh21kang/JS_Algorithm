function parition(arr, left, right, pivotIdx){

    let pivot = arr[pivotIdx];

    while(left <= right){
        while(arr[left]< pivot) left++;
        while(arr[right]> pivot) right-- ;

        if(left <=right){
            let tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left ++;
            right --;
        }
    }
    arr[pivotIdx] = arr[right];
    arr[right] = pivot;
    return right;

}

function quickSort(arr,left, right){
    if(!left)  left = 0;
    if(!right) right = arr.length-1;

    let pivotIdx = left;
    pivotIdx = parition(arr, left+1, right,pivotIdx);

    if(left < pivotIdx-1){
        quickSort(arr, left, pivotIdx-1);
    }
    if(right > pivotIdx +1){
        quickSort(arr, pivotIdx+1, right );
    }
    return arr;

}

let res = quickSort([7,5,3,2,1,9,10,4]);
console.log(res)