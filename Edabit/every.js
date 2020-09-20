
function checkAllEven(arr) {
    return arr.every(x => x % 2 === 0)
}
console.log(checkAllEven([1, 2, 3, 4]));
console.log(checkAllEven([2, 4, 6]));


/* every() returns a boolean - true if every element in this array 
satisfies the provided testing function. An important difference
 with . ... forEach() returns nothing - It iterates the
 Array performing a given action for each item in the Array. */