function rotateMatrix90(matrix){

    let arrText = '';

    let n = matrix.length;
    for (let layer = 0; layer < n/2; layer++){
        let first = layer;
        let last = n - 1 - layer
        for (let i = first; i < last; i++){
            let offset = i - first;
            let top = matrix[first][i]; //save top

            //left -> top
            matrix[first][i] = matrix[last - offset][first];
            //bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset];
            //right -> bottom
            matrix[last][last - offset] = matrix[i][last];
            //top -> right
            matrix[i][last] = top; // right <- saved top
        }
    }

    for (let row = 0; row < matrix.length; row++){     
        for (let column = 0; column < matrix.length; column++){
            arrText += matrix[row][column]+' ';
        }
        console.log(arrText);
        arrText = "";
    }
    
}
rotateMatrix90([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]]);