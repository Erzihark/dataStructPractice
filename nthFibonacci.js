

let memo = new Map(); 
let f;
// ---------------------DP Recursive method------------------------
function nthFibonacci(n){

    if (memo.has(n)){
        return memo.get(n);
    }
    if (n <= 2){
        f = 1;
    }
    else{
    f = nthFibonacci(n - 1) + nthFibonacci(n - 2);
    }
    memo.set(n, f);
    return f;
}
// ---------------------DP Bottoms up method------------------------
function fib(n){

    for (let i = 1; i < n + 1; i++){
        if (i <= 2){
            f = 1;
        }
        else{
            f = memo.get(i-1) + memo.get(i-2);
        }
        memo.set(i, f);
    }
    return memo.get(n);

}

//nthFibonacci(27);
fib(27);
console.log(memo.get(27));
