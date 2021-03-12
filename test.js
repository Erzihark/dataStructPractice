function saveThePrisoner(n, m, s) {

    /*let pos = s;
    let arr = [];
    
    for (let i = 0; i < m; i++){
        
        if (pos > n){
        pos = 1;
        }
        arr.push(pos);
        pos++;
        
    }*/
    let res = s + m - 1;
    res = res % n;
    if (res == 0){
        console.log(n);
        return n;
    }
    console.log(res);  
    return res;
    
    
    
}

saveThePrisoner(4, 234, 3);



