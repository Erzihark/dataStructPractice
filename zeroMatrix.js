function zeroMatrix(matrix){

    let columns = [];
    let rows = [];
    let arrText = "";

    // We store the columns and rows that contain a zero
    for (let row = 0; row < matrix.length; row++){
        for (let column = 0; column < matrix[0].length; column++){
            let val = matrix[row][column];
            if (val == 0){
                columns.push(column);
                rows.push(row);
            }

        }
    }
    // console.log(columns);
    // console.log(rows);

    //we replace the columns with zeros
    for (let i = 0; i < columns.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            matrix[columns[i]][j] = 0;
        }     
    }
    //we replace the rows with zeros
    for (let i = 0; i < rows.length; i++){
        for (let j = 0; j < matrix.length; j++){
            matrix[[j]][rows[i]] = 0;
        }     
    }
    //We print the result
    for (let row = 0; row < matrix.length; row++){     
        for (let column = 0; column < matrix[0].length; column++){
            arrText += matrix[row][column]+' ';
        }
        console.log(arrText);
        arrText = "";
    }


}
zeroMatrix([[0, 2, 3, 4],
            [5, 6, 1, 8],
            [9, 5, 3, 7]]);