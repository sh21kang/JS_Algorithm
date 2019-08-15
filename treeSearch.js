let Tree = (function(){

    function Tree(){
        this.root = null;

    }


    function Node(data){
        this.data = data;
        this.left = null;
        this.right = null;

    }
    
    Tree.prototype.AddTree= function(data){
        
        if(this.root === null){
            this.root = new Node(data);
            return;
        }
        
        let cur = this.root;
        
        while(true){
                if(cur.data <data){
                    if(cur.right ===null){
                        cur.right = new Node(data);
                       break;
                    }
                        cur =cur.right;
                }else{
                    if(cur.left ===null){
                        cur.left = new Node(data);
                        break;
                    }
                        cur =cur.left;
                }
            }
    }

    Tree.prototype.PreOrder = function(cur){
        console.log(cur.data);

        if(cur.left!==null){
            this.PreOrder(cur.left);
        }
        if(cur.right!==null){
            this.PreOrder(cur.right);
        }
    }

    return Tree;
})();


let tr = new Tree();

tr.AddTree(7)
tr.AddTree(10)
tr.AddTree(11)
tr.AddTree(4)
tr.AddTree(5)
tr.AddTree(3)
tr.AddTree(12)
tr.PreOrder(tr.root);

console.log(tr.root);
debugger