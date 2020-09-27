function adjacentElementProduct(tab){
    let largest = 0;

    for(let i = 0; i < tab.length -1; i ++){
       const product = tab[i] * tab[i+1];

       largest = largest < product ? product : largest;
    }
    return largest;
}

console.log(adjacentElementProduct([3,6,-2,-5,7,3]));
console.log(adjacentElementProduct([12,3,4,5,6,4,3-2,2,1]))

