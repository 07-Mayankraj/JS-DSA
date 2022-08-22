function MergeShortedArrays(arr1 , arr2){

    if(arr1.length===0){
        return arr2;
    }
    else if(arr2.length===0){
        return arr1;
    }

    

    let mergedArray = [];
    for(let i = 0;i<arr1.length;i++){
        mergedArray.push(arr1[i]);
    }
    for(let i = 0;i<arr2.length;i++){
        mergedArray.push(arr2[i]);
    }

    // for(let i = 0; i<mergedArray.length;i++){
    //         for(let j = 1; j<mergedArray.length;j++){
    //             if(mergedArray[i]>mergedArray[j]){
    //                 let temp = mergedArray[i];
    //                 mergedArray[i] = mergedArray[j];
    //                 mergedArray[j] = temp;
    //             }
    //         }
    // }

    return mergedArray.sort(function (a, b) {
        return a - b;
      });
}

console.log(MergeShortedArrays( [2,3,4,5,66,2], [23,32,43,54]));


