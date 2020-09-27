function addTwoDigits(n){
   /*  const nums = n.toString().split(' ');       // split not met -> object of one element
    console.log(typeof(nums)); */

    const nums = n.toString().split('');
    console.log(typeof(nums));
    console.log(nums);
    
    /*   return nums.reduce((a,b) => 
    parseInt(a) + parseInt(b)); */

 return parseInt(nums[0]) + parseInt(nums[1]);
}


console.log(addTwoDigits(29)); 