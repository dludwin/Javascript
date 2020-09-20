
function reverse(bool) {
	return typeof bool === 'boolean' ? !bool : 'boolean expected'
}

console.log(reverse(true)); 

console.log(reverse(false));

console.log(reverse(0));
