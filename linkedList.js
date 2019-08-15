function Node(data, next=null){
    this.data = data;
    this.next = next;
}




function LinkedList(){
    this.head = null;
}


LinkedList.prototype.addFirst = function(data){
    if(this.head ===null){
        this.head = new Node(data);
        return;
    }

    let next = this.head;
    this.head = new Node(data, next);
}

LinkedList.prototype.printNode= function(){
    let str = "head -> "
    let cur = this.head;
    while(cur !== null){
        str += String(cur.data) + " -> ";
        cur = cur.next;
    }
    str += "null";
    console.log(str);
}

LinkedList.prototype.deleteNode = function(data){

    let cur = this.head;
    let prv = cur;
    while(cur !== null){
        if(cur.data ===data){
            prv.next = cur.next;
            cur = null;
            break;
        }
        
        prv = cur;
        cur = cur.next;
    }
}


let linklist = new LinkedList();

linklist.addFirst(5)
linklist.addFirst(2)
linklist.addFirst(3)
linklist.addFirst(8)

linklist.deleteNode(3)

linklist.printNode();
console.log(linklist)
