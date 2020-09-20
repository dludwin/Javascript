function add(num1, num2){
    return num1 + num2;
}

function add2(...tab){
    let total = 0;
    
    tab.forEach( x => total += x)
    /* for(let i = 0; i< tab.length; i++){
        total = total + tab[i];
    } */
    return total;
}

console.log(add(1,2));
console.log(add(3,2));

console.log(add2(1,2,3,4,5));
console.log(add2(1,2,3,4));