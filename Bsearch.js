
function Bsearch(arr, value){
    let firstIdx = 0;
    let lastIdx = arr.length-1
    
    while(lastIdx >= firstIdx){
        
        let pIdx = parseInt((lastIdx+firstIdx)/2);

            if(arr[pIdx]===value){
                return true;
            }else if(arr[pIdx] < value){
                //오른쪽에 있음
                firstIdx = pIdx+1;
            }else{
                //왼쪽에 있음
                lastIdx = pIdx -1;
            }

        }

 return false
}


let arr = [ 1, 2, 3, 7, 9, 12, 21, 23, 27 ]

console.log(Bsearch(arr, 1))
console.log(Bsearch(arr, 2))
console.log(Bsearch(arr, 26))


