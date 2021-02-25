function checkPermutation (){

    n = "aasdfghjk";
    s = "sjdafghjk";

    let map = new Map();

    let charSet = [];

    if (n.length == s.length) {
        console.log("FALSE");
        return false;
    }
    // We add each letter of the string to check with its count to the hash table 
    for (let i = 0; i < n.length; i++)
    {
        let subS = n.charAt(i)
        if (!map.has(subS))
        {
            map.set(subS, 1);
        }
        else 
        {
            const newCount = map.get(subS) + 1;
            map.set(subS, newCount);
        }
       
    }

    // We compare the other string to the hash table, and reduce count by 1 for every letter 
    // That matches 
    for (let j = 0; j < s.length; j++)
    {
        let subS = s.charAt(j);
        if (map.has(subS))
        {
            const newCount = map.get(subS) - 1;
            map.set(subS, newCount);
        }
    }

    for (let value in map.values)
    {
        if (value != 0)
        {
            console.log("FALSE");
            return false;
        }
    }

    console.log("true");
    return true;
        

    
    

   

}



checkPermutation();