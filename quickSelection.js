function partition(arr, left, right, pivotIdx){

    let pivot = arr[pivotIdx];
    let tmp;
    while(left <= right){
        while(arr[left] < pivot) left++;
        while(arr[right] > pivot) right--;
        if(left <= right){
            tmp = arr[left];
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


function quickSelection(arr,left, right, select){
    if(!left) left = 0;
    if(!right) right =arr.length-1;

    let pivotIdx = left;
    pivotIdx=  partition(arr, left+1, right, pivotIdx);

      if(pivotIdx -left === select-1){
        return arr[pivotIdx]
    }else if(pivotIdx-left > select-1){
        return quickSelection(arr ,left ,pivotIdx-1 ,select);
    }else{
        return quickSelection(arr , pivotIdx+1, right, select - ((pivotIdx+1)- left));
    }
    return -1;
}

let res = quickSelection([4,7,6,8,2,5], null, null, 4)
console.log(res)