const Stack = (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (value) {
        this.arr.push(value);
    }
    Stack.prototype.pop = function () {
        return this.arr.pop();
    }
    Stack.prototype.empty = function () {
        return this.arr.length === 0 ? true : false;
    }
    return Stack;
})()


const Queue = (function () {
    function Queue() {
        this.origin = new Stack();
        this.tmp = new Stack();
        console.dir(this.origin)

    }
    Queue.prototype.enqueue = function (value) {
        while (!this.origin.empty()) {
            this.tmp.push(this.origin.pop());
        }
        this.origin.push(value);
        while (!this.tmp.empty()) {
            this.origin.push(this.tmp.pop());
        }
    }
    Queue.prototype.dequeue = function () {
        return this.origin.pop();
    }
    return Queue;
})()


let q = new Queue();

q.enqueue(3);
q.enqueue(5);
q.enqueue(1);
q.enqueue(6);
q.enqueue(7);



console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())