//mehtod 1
function reverse(str) 
{

    //check 
    if(!str || str.length < 2 || typeof str !== 'string'){
        
       return 'not a string';
    }
    const reverseStr = []; //creating array for reverse string
    const totatItems = str.length-1;
    
    for (let i = totatItems;i>=0;i--)
    {
        reverseStr.push(str[i]); 
    }
    return(reverseStr.join(''));
        

}

//method 2 using inbuilt funtion 

function reverse2(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        
        console.log(  'not a string');
    }
    return str.split('').reverse().join('');

}


//method 3 using arrow funtion

const reverse3 = str => str.split('').reverse().join('');


// calling the funtion

console.log(reverse("kisne touch kiya usko"));

console.log(reverse2(' nahi jaunga bsdk'));

console.log(reverse3('chala ja bsdk'));


