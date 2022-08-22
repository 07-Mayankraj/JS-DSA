//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined



function firstReccuringElement(input)
{
    for(let i = 0; i<input.length;i++){
        for(let j = i+1;j<input.length;j++){
            if(input[i]===input[j]){
            return input[i];
            }
        }
    }
    return undefined;
}

// Time complexity O(n^2)



function firstReccuringElement2(input){

    let map = {};   //does not allow any duplicates 
    for(let i = 0;i<input.length;i++){

        if(map[input[i]] !== undefined){ //if key[input[i]] = element of arry is exites return 
            
            return input[i];
            
        } else{
            map[input[i]] = i; //i value for the keys 
        }
       // console.log(map);
    }
    return undefined;
}
 ///    time compexity O(n) but the space complexity O(n) cause new object map
console.log(firstReccuringElement2([2,3,5,6,2,4,4]));
