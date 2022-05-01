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

getNode(indx){
    if(indx == 0 || indx > this.length){
        return null
    }
    let counter = 1
    let current = this.head
    while(counter != indx){
        current = current.next 
        counter = counter + 1
    }
    return current
}
}
const ar = new SinglyLinkList();