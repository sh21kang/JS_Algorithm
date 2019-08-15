let heap = [0];


function AddHeap(value){
    heap.push(value);
   
    let my_idx = heap.length-1;
    while(true){
        if(my_idx===1){
            break;
        }
        let mom_idx = my_idx%2 ===1? (my_idx-1)/ 2 : (my_idx)/2;
        if(heap[mom_idx] > heap[my_idx] ){
            let tmp = heap[mom_idx];
            heap[mom_idx]= heap[my_idx];
            heap[my_idx] = tmp;
            my_idx = mom_idx;
        }else{
            break;
        }
    }

}


function DeleteHeap(){
    let my_idx = heap.length-1;

    heap[1] = heap[my_idx];
    heap.pop();
    my_idx =1;

    while(true){

        let = l_child_idx = my_idx*2;
        let = r_child_idx = my_idx*2 +1;

        let = lower_idx = heap[l_child_idx] < heap[r_child_idx] ? l_child_idx :r_child_idx;

        if(heap[lower_idx]< heap[my_idx]){
            let tmp = heap[my_idx];
            heap[my_idx]=  heap[lower_idx];
            heap[lower_idx]= tmp;
            my_idx = lower_idx;
        }else{
            break;
        }
    }
}

AddHeap(3)
AddHeap(10)
AddHeap(2)
AddHeap(7)
AddHeap(5)
AddHeap(9)
AddHeap(4)
AddHeap(1)
DeleteHeap();
DeleteHeap();
DeleteHeap();
DeleteHeap();
DeleteHeap();
DeleteHeap();
DeleteHeap();
DeleteHeap();

console.log(heap)
