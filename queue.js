class Queue {
    constructor(){
        this.arr = [];
    }
    enqueue(value){
        this.arr.push(value);
    }
    dequeue(){
        return this.arr.shift();
    }
}

let q = new Queue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q.dequeue());
