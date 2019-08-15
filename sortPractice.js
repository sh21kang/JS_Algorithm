function bubbleSort(arr){

    for(let i =1 ; i<arr.length ; i++){
        for(let j = 0; j < arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= tmp;
            }
        }
    }
    return arr;
}

function insertSort(arr){

    for(let i=1 ; i< arr.length;i++){
        let tmp = arr[i];
        let j;
        for(j=0; j<i; j++){
            if(arr[i] < arr[j]){
                break;
            }
        }
        for(let k= i ; k > j; k--){
            arr[k] = arr[k-1];
        }
        arr[j] = tmp;
    }
    return arr

}



// let res = bubbleSort([3,2,6,9,4]);
let res = insertSort([3,2,6,9,4]);
console.log(res);
