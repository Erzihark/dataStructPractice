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
    if(index == 0){cra
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
    let previous = null;
    let current = this.head; //a 
    let tmp;

    while (current != null){          

        tmp = current.next;       
        current.next = previous;           
        previous = current;            
        current = tmp;   

        iterations++;
        console.log(list);
        list.printListData ();
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

LinkedList.prototype.delMiddleNode = function(index){

    let current = this.head;

    let i = 1;

    //we simply move to the specified index, and override the current node's
    //values to the current one
    while (i < index - 1){
        current = current.next;
        i++;
    }
    console.log(current);
    
    current.data = current.next.data;
    current.next = current.next.next;

}

LinkedList.prototype.partition = function(data){

    let current = this.head;
    // We divide the nodes in half, with first half being nodes with values
    //less than "data" and the other half with that value + all larger values
    let lessStart = null;
    let lessEnd = null;
    let greaterStart = null;
    let greaterEnd = null;

    while (current != null){
        if (current.element < data){
            if (lessStart == null){
                lessStart = current;
                lessEnd = lessStart;
            }
            else{
                lessEnd.next = current;
                lessEnd = current;
            }
        }
        if (current.element >= data){
            if (greaterStart == null){
                greaterStart = current;
                greaterEnd = greaterStart;
            }
            else{
                greaterEnd.next = current;
                greaterEnd = current;
            }
        }
        current = current.next
    }
    lessEnd.next = greaterStart;
}

LinkedList.prototype.sumLists = function(){
    let current = this.head;
    let firstNum = [];
    let secondNum = [];

    let i = 1;
    //We put the numbers one by one in an array, but in reverse order
    while(current != null){
        if (i <= 3){
            firstNum.unshift(current.element);
        }
        else{
            secondNum.unshift(current.element);
        }
        current = current.next;
        i++;
    }
    //we get back to the head of the list
    current = this.head;

    //We convert the numbers in the array to integers, then add them and make
    //them a string again
    let sum = parseInt(firstNum.join(""), 10) + parseInt(secondNum.join(""), 10);
    sum = sum.toString();
    
    //Then we iterate through the resulting array and put each value in a node
    for (let i = sum.length - 1; i > 0; i--){
        current.element = sum[i];
        current = current.next;
    }
    current.next = null;
    console.log(sum);
}

list.insertAtBeggining(1);
list.insertAtEnd(4);
list.insertAt(2, 1);
list.insertAt(3, 2);
list.insertAtEnd(5);
//list.insertAtEnd(1);
// list.insertAtEnd(2);
// list.insertAtEnd(3);
// list.insertAtEnd(4);

//list.removeDups();
//list.kthToLastElement(3);
//list.delMiddleNode(5);
//list.partition(3);
//list.sumLists();

list.printListData ();

list.reverseList();


// console.log(list);
// list.printListData ();



