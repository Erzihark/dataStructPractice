class Node{
    constructor(data, next = null)
    {
        this.element = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

let list = new LinkedList();

LinkedList.prototype.insertAtBeggining = function(data){

    // A newNode object is created with property data and next = null
    let newNode = new Node(data);

    // The pointer next is assigned head pointer so that both pointers now point at the same node.
    newNode.next = this.head;

    // As we are inserting at the beginning the head pointer needs to now point at the newNode.
    this.head = newNode;

    return this.head;
}

LinkedList.prototype.insertAtEnd = function(data){

    // A newNode object is created with property data and next = null
    let newNode = new Node(data);

    // When head = null i.e. the list is empty, then head itself will point to newNode
    if (!this.head){
        this.head = newNode;
        return this.head;
    }
    // Else, traverse the list to find the tail (the tail node will initially be poining at null),
    // and update the tail's next pointer
    else{
        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }
        tail.next = newNode;

        return this.head;
    }
}

// Helper function getAt() is defined to get to the desired position
// This function can also be later used for performing delete operation from a given position
LinkedList.prototype.getAt = function(index){
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter == index){
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}

// The insertAt() function contains the steps to insert a node at a given index
LinkedList.prototype.insertAt = function(data, index){
    // If the list is empty i.e. head = null
    if (!this.head){
        this.head = new Node(data);
        return;
    }
    // If new node needs to be inserted before the head
    if(index == 0){
        this.head = new Node(data, this.head);
        return;
    }
    //else, use getAt() to find previous node
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head;
    
}

//The deleteFirstNode function deletes the first element of the linked list
LinkedList.prototype.deleteFirstNode = function(){
    if (!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}

// Deletes last node in a list and points the second to last node to the new last node
LinkedList.prototype.deleteLastNode = function(){
    if (!this.head){
        return null;
    }
    // If there is only one node in the list
    if (!this.head.next){
        this.head = null;
        return;
    }

    let previous = this.head;
    let tail = this.head.next;

    while (tail.next != null){
        previous = tail;
        tail = tail.next;
    }

    previous.next = null;
    return this.head;
}

LinkedList.prototype.deleteAt = function(index){
    //when list is empty i.e. head = null
    if (!this.head){
        this.head = new Node(data);
        return;
    }
    //node needs to be deleted from the front of the list i.e. before the head
    if (index == 0){
        this.head = this.head.next;
        return;
    }
    // else, use getAt() to find the previous node
    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
        return;
    }

    previous.next = previous.next.next;
    return this.head;
}

LinkedList.prototype.deleteList = function(){
    this.head = null;
}

LinkedList.prototype.printListData = function() {
    let current = this.head;

    while(current){
        console.log(current.element);
        current = current.next;
    }
}

LinkedList.prototype.reverseList = function() {
    let prev = null;
    let curr = this.head; //a
    let next = null; 

    while (curr != null){
        next = curr.next; //save next
        console.log(next);
        curr.next = prev; // reverse
        prev = curr; // advance prev and curr
        curr = next; // advance prev and curr
    }
}

LinkedList.prototype.removeDups = function() {

    let hash = new Map();

    let current = this.head;
    let previous = this.head

    while(current){

        if(!hash.has(current.element)){
            hash.set(current.element, 1)
            previous = current; //Previous only updates to current whenever a non
                                //duplicated value shows up
        }
        else{
            let newCount = hash.get(current.element) + 1;
            hash.set(current.element, newCount);
            previous.next = current.next; //Points previous pointer to the 
                                          // node this one is pointing to
        }
        
        // Essentially we are just moving
        // Down the linked list
        current = current.next;         
        
    }
    console.log(hash);
}

LinkedList.prototype.kthToLastElement = function(pos){
    let current = this.head;
    let runner = this.head;

    // We have 2 pointers and separate them "pos" distance, that way when the
    // runner pointer reaches null, we know the current pointer is at the 
    // desired position
    let i = 0;
    while (i < pos){  // We move runner "pos" nodes ahead
        runner = runner.next
        i++;
    }

    while (runner != null){ //We move both at the same time now
        current = current.next;
        runner = runner.next
    }

    console.log("The element at the " + pos + "th position from last is " + current.element);

   
}

list.insertAtBeggining("a");
list.insertAtEnd("d");
list.insertAt("b", 1);
list.insertAt("c", 2);
list.insertAtEnd("e");
list.insertAtEnd("a");
list.insertAtEnd("b");
list.insertAtEnd("c");
list.insertAtEnd("d");

//list.removeDups();
//console.log(list);
//list.kthToLastElement(3);
list.printListData ();


