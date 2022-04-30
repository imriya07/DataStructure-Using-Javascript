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
    unshift (val){
        let newHead = new Node(val);
        if(this.head == null){
            this.head = newHead;
            this.tail = this.head;
        }else {
            newHead.next = this.head;
            this.head = newHead
        }
        this.length = this.length + 1;
        return this.length
    }
}
const ar = new SinglyLinkList();