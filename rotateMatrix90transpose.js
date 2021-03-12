function rotateMatrix90(matrix){

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

}
rotateMatrix90([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]]);
