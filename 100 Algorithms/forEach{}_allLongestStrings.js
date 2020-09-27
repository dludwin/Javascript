function allLongestStrings(arr){
    let longestLenght = 0;
    const longestWords = [];

    arr.forEach((word) => {   
        longestLenght = longestLenght < word.length ?
        word.length : longestLenght;
    });

    arr.forEach((word) => {
        if(longestLenght === word.length)
        // longestWords = longestWords.concat(word);
        longestWords.push(word);             // adds element at the end of array
    }
    )                                        //  unshift adds at the beginning
    return longestWords;                     // shift removes first element
}

console.log(allLongestStrings(["aba","aa","ad","vcd","aba"]));