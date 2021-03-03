class Graph{
    constructor(vertexNum){
        this.vertexNum = vertexNum;
        this.adjList = new Map();
    }
}

Graph.prototype.addVertex = function(vert){
    this.adjList.set(vert, []);
}

Graph.prototype.addEdge = function(vert1, vert2) {
    
    // Add only this for directed graph
    this.adjList.get(vert1).push(vert2);
    //Add this one too for undirected graph
    //this.adjList.get(vert2).push(vert1);
}

//Prints vertex and adjacency list
Graph.prototype.printGraph = function(){
    //get all vertices
    let getKeys = this.adjList.keys()
    //iterate over the vertices
    for (let i of getKeys) {

        //get the adjacency list fot the current vertex
        var getValues = this.adjList.get(i);
        var conc = "";
        //iterate through the adjacency list and concatenate
        //the values into a string
        for (var j of getValues) {
            conc += j + " ";
            //print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }  
    }
}

Graph.prototype.BFS = function(startNode){
    let visited = {};
    let queue = new Queue();

    visited[startNode] = true;
    queue.enqueue(startNode);

    while (!queue.isEmpty()){
        let getQueueElement = queue.dequeue();

        console.log(getQueueElement);

        let getList = this.adjList.get(getQueueElement);

        for (let i in getList) {
            let neigh = getList[i];
            if (!visited[neigh]) {
                visited[neigh] = true;
                queue.enqueue(neigh);       
            }
        }
    }
    console.log(visited);
}

Graph.prototype.DFS = function(startNode){
    let visited = {};
    this.DFSutil(startNode, visited);
}

Graph.prototype.DFSutil = function(vert, visited){
    visited[vert] = true;
    console.log(vert);

    let getNeighbours = this.adjList.get(vert);

    for (let i in getNeighbours){
        let getElement = getNeighbours[i];
        if(!visited[getElement]){
            this.DFSutil(getElement, visited);
        }
    }
}

var graph = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

//-----------------------------Queue------------------------------
class Queue {
    constructor(){
        this.items = [];
    }
}
Queue.prototype.enqueue = function(element){
    this.items.push(element);
}

Queue.prototype.dequeue = function(){
    return this.items.shift();
}

Queue.prototype.peek = function(){
    console.log(this.items[0]);
}

Queue.prototype.isEmpty = function(){
    if (this.items.length == 0){
        //console.log("Queue is empty");
        return true;
    }
    else{
        //console.log("Queue is not empty");
        return false;
    }
}
//---------------------------Queue----------------------------------

graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");

graph.printGraph();
//graph.BFS("A");
graph.DFS("A");