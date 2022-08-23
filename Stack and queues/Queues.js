class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
 }

 class Queue {
    constructor(){
        this.first = null;
        this.last  =null;
        this.length = 0;
    }

    peek(){
        // return the peek element of stack
        return this.first;
    }
    enqueue(value){
        //code

        const newNode = new Node(value);
       
        if(this.length === 0){                    //if stack is empty 
            this.first = newNode;                //top and bottom will follow same node
            this.last = newNode;
        }
        else{
             this.last.next = newNode;
             this.last  = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        //code
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
    }
     
 }
//_________________________________________________________
 const myQueue = new Queue();
 myQueue.enqueue('what');
 myQueue.enqueue('the');
 myQueue.enqueue('fuck');
 console.log(myQueue);
 console.log(myQueue.peek());
 myQueue.dequeue();
 console.log(myQueue);
 
 