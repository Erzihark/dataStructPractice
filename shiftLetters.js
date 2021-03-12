function shitftLetters(S, shifts){

    let ans = [];
    //we store the utf-16 values of each letter in an array
	for (let i = 0; i < S.length; i++){
		 let char = S.charCodeAt(i);
         ans[i] = char;
	}
	//We now do the addition of the shifts					
	for (let i = 0; i < shifts.length; i++){ 
		for (let j = 0; j <= i; j++){    
			if (ans[j] + shifts[i] > 122){
            ans[j] = 97 + (ans[j] + shifts[i] - 122); 
                while (ans[j] > 122){
                    ans[j] -= 25;
                    console.log("reduced ans by 26");
                }    
            }   
			else
			ans[j] += shifts[i];	 
		}			 
	}
    // We convert from utf-16 to characters, then join and print
	for (let i = 0; i < ans.length; i++){
	ans[i] = String.fromCharCode(ans[i]); 
	}		
    console.log(ans.join(""));		 	
    return ans.join("");
}

shitftLetters("bad", [10,20,30]);