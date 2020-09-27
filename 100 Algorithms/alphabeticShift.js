function alphabeticShift(inputString) {
    const alphabet = {
        'a':'b', 'b':'c','c':'d',
        'd':'e','e':'f','f':'g',
        'g':'h','h':'i','i':'j',
        'j':'k','k':'l','l':'m',
        'm':'n','n':'o','o':'p',
        'p':'q','q':'r','r':'s',
        's':'t','t':'u','u':'v',
        'v':'w','w':'x','x':'y',
        'y':'z','z':'a'
    }

    let inputShifted = inputString.split('');     // array of separate letters

    // faster way to do this is by using dictionary - called object in js

    for (let i = 0; i < inputShifted.length; i++){
        console.log(inputShifted[i])
        inputShifted[i] = alphabet[inputShifted[i]];          // get value of inputShifted and get the value of that key . Accessing object properties
    }
    return inputShifted.join('');
}


function alphabeticShift2(inputString) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    let inputShifted = inputString.split('');  // split by character and return array 


    for(let i = 0; i < inputShifted.length; i++){
        let index = 0;

        if(inputShifted[i] !== 'z'){
            index = alphabet.indexOf(inputShifted[i])+1;
        }
        inputShifted[i] = alphabet[index];
    }

    return inputShifted.join('');
}

console.log(alphabeticShift('crazy'))
console.log(alphabeticShift2('crazy'))