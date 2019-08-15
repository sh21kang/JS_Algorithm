let arr = [3,2,9,7,5]


for(let i =1; i < arr.length; i++){
   let point= arr[i];
   let j;
    for(j= 0; j< i;  j++){
        if(arr[j] > arr[i]){
            break;
        }
    }
    for(let k= i ; k > j; k--){
        arr[k] = arr[k-1];
    }
    arr[j] = point;
}
console.log('insertion', arr);