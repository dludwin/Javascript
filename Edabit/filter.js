
const countTrue = r => r.filter(Boolean).length
console.log(countTrue([false, false, false, false]));
console.log(countTrue([true, false, false, true, false]));

/* 
Use filter() on arrays to go through an array and 
return a new array with the elements that pass the 
filtering rules. */