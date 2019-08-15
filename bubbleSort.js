

let arr = [3,2,9,7,5]



for(let i = 1; i < arr.length; i++){
    for(let j= 0 ; j< arr.length - i;j++){
        
        if(arr[j] > arr[j+1]){
            
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }

    }
}
console.log('bubble',arr);