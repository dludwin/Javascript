function almostIncreasingSequence(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= arr[i-1])         // [-1] doesn't exist but when i=1 it does with i=0 
        count++;
          if(arr[i] <= arr[i-2] && arr[i+1] <= arr[i-1])
            return false; 
         
    }
    

    return count <= 1;
}


console.log(almostIncreasingSequence([1,3,1,3]));
console.log(almostIncreasingSequence([1,3,2]));


// Determing whether it is possible to obtain a strictly increasing 
// sequence by removing no more than one element from the array