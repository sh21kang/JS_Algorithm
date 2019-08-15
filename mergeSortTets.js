function mergeSort(arr){

    if(arr.length ===1){
        return arr; 
    }   
    let pivot = Math.floor(arr.length/2);
    let left = arr.slice(0,pivot);
    let right = arr.slice(pivot,arr.length);

    return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right){
    let result =[];
    while(left.length && right.length){
        if(left[0]< right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
}

let res= mergeSort([2,3,1,5,9,8,7]);
console.log(res)