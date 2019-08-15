let Heap = (function(){
    function Heap(){
        this.arr = [0];
    }
    Heap.prototype.Push= function(value){
        
        this.arr.push(value);
        let curIdx = this.arr.length-1;
        while(curIdx > 1){
            let momIdx = Math.floor(curIdx/2);
            if(this.arr[curIdx]< this.arr[momIdx]){
                let tmp = this.arr[momIdx];
                this.arr[momIdx] = this.arr[curIdx]
                this.arr[curIdx] = tmp;
                curIdx = momIdx
            }else{
                break;
            }
        }
    }
    Heap.prototype.Pop= function(){
        let res = this.arr[1];
        this.arr[1] = this.arr.pop();
        
        let curIdx = 1;

        while(2*curIdx <= this.arr.length-1){
           let lowerIdx = 2*curIdx;
            if(2*curIdx+1 <= this.arr.length-1){
                lowerIdx = this.arr[2*curIdx] < this.arr[2*curIdx+1] ? 2*curIdx : 2*curIdx+1
            }
            
            if(this.arr[curIdx] > this.arr[lowerIdx]){
                let tmp = this.arr[curIdx];
                this.arr[curIdx] = this.arr[lowerIdx];
                this.arr[lowerIdx] = tmp;
            }else{
                break;
            }
        }
        
        return res;
    }

    return Heap;
})();

let heap = new Heap();

heap.Push(5);
heap.Push(2);
heap.Push(7);
heap.Push(4);
heap.Pop();
heap.Pop();

console.log(heap);
debugger;