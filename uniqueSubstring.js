function isUnique(n){

    let charSet = [];

    for (let i = 0; i < n.length; i++)
    {
        let val = n.charAt(i);
        if (charSet[val])
        {
           console.log("false");
           return false;
        }
        charSet[val] = true;
    }
    console.log("true");
    return true;

}



isUnique("asdfghjkl");