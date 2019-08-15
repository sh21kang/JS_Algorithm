function bubbleSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}


function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j = 1 + i; j < arr.length; j++) {
            if (arr[idx] > arr[j]) {
                idx = j;
            }
        }
        if (idx !== i) {
            let tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    return arr;
}

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j;
        for (j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                break;
            }
        }
        for (let k = i; k > j; k--) {
            arr[k] = arr[k - 1];
        }
        arr[j] = tmp;
    }
    return arr;
}

let res = insertionSort([4, 2, 7, 1, 9]);
console.log(res);