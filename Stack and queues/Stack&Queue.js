 class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
 }

 class Stack {
    constructor(){
        this.top = null;
        this.bottom =null;
        this.length = 0;
    }

    peek(){
        // return the peek element of stack
        return this.top;
    }

    push(value){

        const newNode = new Node(value);        //creating new node 

        if(this.length === 0){                    //if stack is empty 
            this.top = newNode;                 //top and bottom will follow same node
            this.bottom = newNode;
        }
        else{       //replace new node to top value
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
        }
        this.length++;
        return this;
        
    }
    pop(){
        //remove top item
        if(!this.top){
            return null;
        }
        const holdingNode = this.top;
        this.top = this.top.next;
        this.length--;
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