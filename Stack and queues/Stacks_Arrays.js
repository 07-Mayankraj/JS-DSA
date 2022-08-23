class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
 }

 class Stack {
    constructor(){
        this.array = [];
    }

    peek(){
        // return the peek element of stack
        return this.array[this.array.length-1];
    }

    push(value){

        this.array.push(value);
        return this;
        
    }
    pop(){
        this.array.pop();
        return this;
        
    } 
 }
//_________________________________________________________
 const myStack = new Stack();
 myStack.push('google');
 myStack.push('udemy');
 myStack.push('discord');
 
 
 console.log(myStack);
 myStack.pop();
 console.log(myStack);
 //console.log(myStack.peek());