function binarySearch(arr, left, right, value) {

    let pivotIdx = Math.floor((left + right) / 2);
    if (arr[pivotIdx] === value) {
        return true;
    } else if (arr[pivotIdx] < value) {
        if (pivotIdx + 1 <= right)
            return binarySearch(arr, pivotIdx + 1, right, value);
    } else {
        if (pivotIdx - 1 >= left)
            return binarySearch(arr, left, pivotIdx - 1, value);
    }
    return false;
}

let res = binarySearch([1, 3, 4, 5, 6], 0, 4, 4);
console.log(res);