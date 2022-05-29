class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new Node(8)

Node.prototype.insert = function (value){
    let newNode = new Node(value);
    insertNode(this, newNode);
}

Node.prototype.delete = function (value){
    deleteNode(value, this);
}

Node.prototype.height = function(){
    console.log(treeHeight(this));
}

Node.prototype.maxDepth = function(){
    console.log(maxDepth(this));
}

Node.prototype.minDepth = function(){
    console.log(minDepth(this));
}

function insertNode(node, newNode){
    if (newNode.value < node.value){
        if (node.left === null){
            node.left = newNode;
        }
        else{
            insertNode(node.left, newNode);
        }
    } else{
        if (node.right === null){
            node.right = newNode;
        }
        else {
            insertNode(node.right, newNode);
        }
    }
}

function deleteNode(toDelete, node){
    if (node.value === null){
        return null;
    }

    if (toDelete < node.value){
        node.left = deleteNode(toDelete, node.left);
        return node;
    }
    else if (toDelete > node.value){
        node.right = deleteNode(toDelete, node.right);
        return node;
    }
    else {
        if (node.left === null && node.right && null){
            node = null;
            return node;
        }
        if (node.left === null){
            node = node.right;
            return node;
        }
        if (node.right === null){
            node = node.left;
            return node;
        }
    }
}

function treeHeight(node){
    if (node === null){
        return -1;
    }
    return Math.max(treeHeight(node.left), treeHeight(node.right)) + 1;
}

function maxDepth(node){
    if (node === null){
        return 0;
    }
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

function minDepth(node){
    if (node === null){
        return 0;
    }
    if (node.left === null){
        return minDepth(node.right) + 1;
    }
    if (node.right === null){
        return minDepth(node.left) + 1;
    }
    return Math.min(minDepth(node.left), minDepth(node.right)) + 1
}


tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(6);
tree.insert(10)
tree.insert(1);
tree.insert(7);



tree.height(tree);
tree.maxDepth(tree);
tree.minDepth(tree);
console.log(tree);
