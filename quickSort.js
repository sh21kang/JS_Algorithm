

function partition(arr , left, right, pivotIndex){
    let pivot = arr[pivotIndex];
    let temp;

    while(left <= right){
        while (arr[left] < pivot)
            left++;
        while (arr[right] > pivot)
            right--;
        if (left <= right) { // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
                temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp; // 서로 바꿔줍니다.
                left++;
                right--;
            }
    }
    temp = arr[right];
    arr[right] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    return right;
}




function quickSort(arr,left, right){
    if (!left) left = 0;
    if (!right) right = arr.length - 1;

    let pivotIndex = left;

    pivotIndex = partition(arr, left+1, right ,  pivotIndex);
    if (left < pivotIndex - 1)
    quickSort(arr, left, pivotIndex-1);
    if (pivotIndex + 1 < right)
    quickSort(arr, pivotIndex+1, right);
    return arr;
}

let ar = quickSort([4,1,7,6,3,8,2,5]);

console.log(ar)
debugger