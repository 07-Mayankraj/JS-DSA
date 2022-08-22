//how arrays  are created 
 
class MyArray{

    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.data-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);

        }
        shiftItems(index){
            for(let i = index;i<this.length-1;i++)
            {
                this.data[i] = this.data[i+1];
                this.length--;
                
            }
        }

    }



const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('are');
newArray.push('amezing');
newArray.push('bro');
console.log(newArray);
newArray.pop();
newArray.delete(2);

console.log(newArray);