function balancedParentheses(s){
    //This algo iterates over the string, pushes opening parentheses into a stack
    //and whenever it finds a closing one, it checks if the last inserted opening one
    //matches the type of current closing parentheses, in that case, the last opening
    //parenthesis is poped out of the stack.
    //If the stack has elements left after iterating we return false, otherwise we return true
    let stack = [];
    
    for (let i = 0; i < s.length; i++){
        switch(s[i]){
            case "(":
            case "{":
            case "[":  
                stack.push(s[i]);
                break;
            case ")":
                if (stack[stack.length - 1] && stack[stack.length - 1] === "("){
                    stack.pop();
                } else {
                		stack.push(s[i]);
                }
                break;
            case "}":
                if (stack[stack.length - 1] && stack[stack.length - 1] === "{"){
                    stack.pop();
                }else {
                		stack.push(s[i]);
                }
                break;
            case "]":
                if (stack[stack.length - 1] && stack[stack.length - 1] === "["){
                    stack.pop();
                }else {
                		stack.push(s[i]);
                }
                break;
        }
    }
    if (stack.length > 0){
       console.log("false");
    } else {
        console.log("true");
    }

    //Time complexity O(n);
    //Space complexity 0(n);
}

//Test cases
let s;
s = "{}"; //true
//s = "}{"; //false
//s = "{{}"; //false
//s = ""; //true
//s = "{abc...xyz}"; //true
//s = "{[()]}";  //true
//s = "{[(]}";  //false

balancedParentheses(s);



