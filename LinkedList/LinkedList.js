// 10-->5-->16

/// making of linked list using class
class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            //in head the value and address of next head
            value: value,
            next: null,
        };

        this.tail = this.head; //in tail refrers head and
        this.length = 1; //length of this linked list
    }
    append(value) {  //adding x ele. at the end 
        
        const newNode = new Node(value);
        this.tail.next = newNode;   //added newNode = linkedlist.tail.next(head referance)
        this.tail = newNode;        //new node is now tail
        this.length++;
        return this;
    }

    prepend(value) {                    // adding element at first
    
        const newNode = new Node(value);
        newNode.next = this.head;   //newNode's next = will be new head 
        this.head = newNode;        //and upadate the referance to new head
        this.length++;
        return this
    }

    printList(){
        const array = [];                   //empty array
        let currentNode = this.head;        //itrator head
        while(currentNode !== null){        //current node zero ke equal nhi hota 
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    
    insert(index,value){            
         // check parameter 
         if(index >= this.length){      // if index is greater then append the value
            return this.append(value);
         }

         const newNode = new Node(value);               //new node with new value
         const leader = this.traverseToIndex(index-1);  //leader node before insertion
         const holdingPointer = leader.next;            //them to hold the postion of next node
         leader.next = newNode;                         //assigning leader node to new node
         newNode.next = holdingPointer;                 //assinging temp node back to new node
         this.length++;                                 
         return this.printList()        
    }

    traverseToIndex(index){
        //check params
        let count = 0;
        let currentNode = this.head;
        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    remove(index){
        //
        if(index <=0){
            return console.log('Head can not be deleted');
        }
        // const preNode = this.traverseToIndex(index-1)
        // const nextNode = this.traverseToIndex(index+1);
        // preNode.next = nextNode;
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next =  unwantedNode.next;
        this.length--;                                 
         return this.printList() 
    }
    reverse(){
        if(!this.head.next){
            return this.head;
        }

        // [ 1, 2, 3, 4, 5 ]

        let first = this.head;              //1
        let second = first.next;            //2
         while(second){                     //until second isn't null
           const  temp = second.next;       // temp = 3
            second.next = first;             // first is become 3
            first = second;                 // first  beacome 2 
            second = temp;                  // second is become 3     
         }
         this.head.next = null;
         this.head= first;

    }
}
 
//creating linkedlist using class

const myLinkedList = new LinkedList(0);
//myLinkedList.prepend(1);
myLinkedList.insert(2,1);
myLinkedList.insert(23,2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
console.log(myLinkedList.printList());
//myLinkedList.remove(3);
myLinkedList.reverse();
console.log(myLinkedList.printList());

