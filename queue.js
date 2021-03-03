class Queue {
    constructor(){
        this.items = [];
    }
}

Queue.prototype.add = function(element){
    this.items.push(element);
}

Queue.prototype.remove = function(){
   return this.items.shift();
}

Queue.prototype.peek = function(){
    console.log(this.items[0]);
}

Queue.prototype.isEmpty = function(){
    if (this.items.length == 0){
        console.log("Queue is empty");
    }
    else{
        console.log("Queue is not empty");
    }
}

let queue = new Queue();

queue.add("first");
queue.add("second");
queue.add("third");

queue.remove();

queue.peek();
queue.isEmpty();