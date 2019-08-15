function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right= right;
}

point  = null;

function search(value){

    let cur = point;

    while(true){

        if(cur.data ===value){
            return true;
        }else if(cur.data >value){
            if(cur.left===null){
                break;
            }else{
                cur = cur.left;
            }
        }else{
            if(cur.right===null){
                break;
            }else{
                cur = cur.right;
            }
        }
    }
    return false;


}


function insert(value){

if(point ===null){
    point = new Node(value, null, null);
    return;
}
let cur= point;
while(true){

    if(cur.data > value){
        // 왼쪽
        if(cur.left===null){
            cur.left = new Node(value,null,null);
            break;
        }else{
            cur = cur.left;
        }

    }else{

        if(cur.right===null){
            cur.right = new Node(value,null,null);
            break;
        }else{
            cur = cur.right;
        }

    }
}

}


insert(2);
insert(5);
insert(4);
insert(7);
console.log(point)
console.log(search(7))