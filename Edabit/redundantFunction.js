const redundant = str => () => str;

const f2 = redundant("pear")
console.log(f2());
