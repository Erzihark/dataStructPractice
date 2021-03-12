function climbingLeaderboard(scores, alice) {
    let s = scores.length; // = n
    let a = alice.length; // = m

    let res = new Array(a);
    let rank = new Array(s);

    rank[0] = 1;

    for (let i = 1; i < s; i++){
        if(scores[i] == scores[i - 1]){
            rank[i] = rank[i - 1];
        }
        else {
            rank[i] = rank[i - 1] + 1
        }
    }

    for (let i = 0; i < a; i++){
        let aliceScore = alice[i];
        if (aliceScore > scores[0]){
            res[i] = 1;
        }
        else if(aliceScore < scores[s - 1]){
            res[i] = rank[s - 1] + 1;
        }
        else {
            let index = binarySearch(scores, aliceScore);
            console.log(index);
            res[i] = rank[index];
        }
    }
    console.log(res);
    return res;

    function binarySearch(arr, x){
        let start = 0
        let end = arr.length - 1;

        while (start <= end){
            let mid = Math.floor((start + end)/2);
            console.log("Start is: " + start);
            console.log("End is: " + end);

            if (arr[mid] == x) return mid;

            else if (x > arr[mid]){
                end = mid - 1;
                
            }
            else{
                start = mid + 1;
            }
                
        }
        return start;
    } 
}

climbingLeaderboard([100, 100, 50, 40, 40, 20 ,10], [25, 15, 70, 120]);


