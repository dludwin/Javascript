function addTwoDigits(n){
    const nums = n.toString().split('');
  /*   return nums.reduce((a,b) => 
    parseInt(a) + parseInt(b)); */

 return parseInt(nums[0]) + parseInt(nums[1]);
}


console.log(addTwoDigits(29)); 