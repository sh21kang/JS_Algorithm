const Heap = (function(){
    function Heap(){
        this.heap = [0];
    }
    
    Heap.prototype.pushHeap = function(value, vertex){
        this.heap.push([value,vertex]);
       
        let my_idx = this.heap.length-1;
        while(true){
            if(my_idx===1){
                break;
            }
            let mom_idx = my_idx%2 ===1? (my_idx-1)/ 2 : (my_idx)/2;
            if(this.heap[mom_idx][0] > this.heap[my_idx][0] ){
                let tmp = this.heap[mom_idx];
                this.heap[mom_idx]= this.heap[my_idx];
                this.heap[my_idx] = tmp;
                my_idx = mom_idx;
            }else{
                break;
            }
        }
    
    }
    
    Heap.prototype.popHeap = function(){
        let my_idx = this.heap.length-1;
    
        const returnVal =this.heap[1];
        this.heap[1] = this.heap[my_idx];
        
        
        
        this.heap.pop();
        my_idx =1;
    
        while(true){
    
            let = l_child_idx = my_idx*2;
            let = r_child_idx = my_idx*2 +1;
            
            let lower_idx;
            if(l_child_idx > this.heap.length-1){
                break;
            }else if(r_child_idx > this.heap.length-1){
                lower_idx = l_child_idx;
            }else{
                lower_idx= this.heap[l_child_idx][0] < this.heap[r_child_idx][0] ? l_child_idx :r_child_idx;
            }
            
            if(this.heap[lower_idx][0]< this.heap[my_idx][0]){
                let tmp = this.heap[my_idx];
                this.heap[my_idx]=  this.heap[lower_idx];
                this.heap[lower_idx]= tmp;
                my_idx = lower_idx;
            }else{
                break;
            }
        }
        return returnVal;
    }

    Heap.prototype.isEmpty =function(){
        return this.heap.length ===1 ? true : false;
    }

    return Heap;
})()


let heap = new Heap();
let visited = Array.apply(null, new Array(5)).map(()=> false);
let dist = Array.apply(null, new Array(5)).map(()=>Infinity);
let map = Array.apply(null, new Array(5)).map(()=>  Array.apply(null, new Array(5)).map(()=> 0));

map[0][1] = 2;
map[0][2] = 4;
map[1][2] = 1;
map[1][3] = 5;
map[2][3] = 6;
map[3][2] = 1;
map[4][0] = 1;

function dijkstra(start){
    heap.pushHeap(0 , start);
    

    while(!heap.isEmpty()){
        let cur = heap.popHeap();
        let dis = cur[0];
        let name = cur[1];

        if(visited[name]===true){
            continue;
        }
        if(dist[name] > dis){
            visited[name] = true;
            dist[name] = dis;
        }

        map[name].forEach((ele,idx) => {
            if(ele!==0){
                heap.pushHeap(ele+dis, idx)
            }
        });
    }
}



dijkstra(0);
console.log(dist)

debugger