function rotateMatrix90(matrix){

    // let newMatrix = [[0, 0, 0, 0],
    //                  [0, 0, 0, 0],
    //                  [0, 0, 0, 0],
    //                  [0, 0, 0, 0]]

    let arrText = '';

    // First we get the matrix transpose
    for (let row = 0; row < matrix.length; row++){     
        for (let column = 0; column < row; column++){
            let temp = matrix[row][column];
            matrix[row][column] = matrix[column][row];
            matrix[column][row] = temp;
        }
    }
    //Then we reverse the values of each row
    matrix[0].reverse();
    matrix[1].reverse();
    matrix[2].reverse();
    matrix[3].reverse();

    //Then we print the reversed transpose, which is the same as a rotation
    for (let row = 0; row < matrix.length; row++){     
        for (let column = 0; column < matrix.length; column++){
            arrText += matrix[row][column]+' ';
        }
        console.log(arrText);
        arrText = "";
    }


   /* console.log(matrix[0]);
    console.log(matrix[1]);
    console.log(matrix[2]);
    console.log(matrix[3]);*/
}
rotateMatrix90([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]]);

 // let newMatrix =    [[0,0 0,1 0,2 0,3],
    //                  [1,0 1,1 1,2 1,3],
    //                  [2,0 2,1 2,2 2,3],
    //                  [3,0 3,1 3,2 3,3]]