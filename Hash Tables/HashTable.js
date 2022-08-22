//building the hash table 
//we using array as objects

//creating a object
class HashTable {

    constructor(size){

        this.data = new Array(size); //creating new array which will hold information for us
    //              [['key',00000]]   frist item = aray inside in array like bucket

    }

    // hash function transfrom key into hash codes
    _hash(key){
        let hash = 0;
        for(let i = 0; i< key.length;i++){
            hash = (hash+key.charCodeAt(i)*i)%this.data.length;
            
        }
        return hash;
    }
    //set() method set the item in hastable
    set(key,value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
            this.data[address].push([key,value]);
            console.log(this.data)
            
        } else{
        this.data[address].push([key,value]);
        return this.data
        }
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket)
    }

    
}



const myHashTable = new HashTable(50);
myHashTable.set('Lovee you' , 3000);
myHashTable.get('Lovee you');





7