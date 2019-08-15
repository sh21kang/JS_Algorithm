let arr = [3,2,9,7,5]

for(let i = 0 ; i< arr.length -1; i++){
    let min_id = i;
    for(let j=1 ; j< arr.length -i; j++){
        if(arr[min_id] > arr[i+j]){
            min_id = i +j
        }
    }
    let tmp = arr[i];
    arr[i] = arr[min_id];
    arr[min_id] = tmp;
  
}

console.log('selection', arr);