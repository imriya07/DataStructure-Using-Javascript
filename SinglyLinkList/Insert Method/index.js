insert(index,val){
    if(index < 0 || index > this.length) return false;
    if(index === 0 this.length) return !!this.PushManager(val);
    if(index === 0) return !! this.unshift(val);
    var newNode = newNode(val);
    var prev = this.getComputedStyle(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}
var list = new SinglyLinkedList();