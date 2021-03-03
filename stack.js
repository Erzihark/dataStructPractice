class Stack {
    constructor (){
        this.items = [];
    }
}

let min = 1000000000000;
var minTracker = new Stack();

Stack.prototype.push = function(element) {
    this.items.push(element);
}



Stack.prototype.pop = function() {
    if (this.items.length == 0){
        console.log("Underflow");
        return;
    }
    let value = this.items.pop();
    console.log(value);
    
}

Stack.prototype.peek = function() {
    console.log(this.items[this.items.length - 1]);
    return this.items[this.items.length - 1];
}

Stack.prototype.isEmpty = function() {
    if (this.items.length == 0){
        console.log("Stack is empty");
    } else {
        console.log("Stack is not empty");
    }
}

Stack.prototype.printStack = function() {
    let arr = [];
    for (let i = 0; i < this.items.length; i++) {
        arr.push(this.items[i]);    
    }
    arr.join("");
    console.log(arr);
}

var stack = new Stack();

stack.isEmpty();


stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack();
stack.peek();
stack.pop();
stack.printStack();