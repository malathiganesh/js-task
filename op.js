var a=parseInt(prompt("enter a number:"));
var b=parseInt(prompt("enter a number"));
var op=prompt("enter a operator");
switch(op){
    case '+':
        console.log("Result:",(a + b));
        break;
    case '-':
        console.log("Result:",(a - b));
        break;
    case '*':
        console.log("Result:",(a * b));
        break;
    case '/':
        console.log("Result:",(a / b));
        break;
    default:
         console.log("please enter a number:)");
}