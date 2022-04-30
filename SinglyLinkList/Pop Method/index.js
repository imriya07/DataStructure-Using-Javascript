class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
class SinglyLinkList{
    constructor(){
        this.head = null;
        this.next = null;
        this.length = 0;
    }
    push(x) {
        let newNode = new Node(x);
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length = this.length + 1
        return this.length
    }
    pop() {
        if(this.head == null){
            return "No node"
        }
        let a = this.head;
        let b = a;
        while(b.next){
            a = b
            b = b.next
        }
        this.tail = a;
        this.tail.next = null;
        this.length = this.length - 1;
        if(this.length == 0){
            this.tail = null
            this.head = null
        }
        return b
    }
}
const ar = new SinglyLinkList();


