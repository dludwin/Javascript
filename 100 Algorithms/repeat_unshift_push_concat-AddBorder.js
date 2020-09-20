function addBorder(picture){
    /* const lengthOfWall = picture[0].length + 2;
    let wall = '';
    for(let i  = 0; i < lengthOfWall; i++){
        wall = wall.concat('*');
    } */
    const wall = '*'.repeat(picture[0].length + 2);    // A lot cleaner
    
    picture.unshift(wall);           // The unshift() method adds new items to the beginning of an array, and returns the new length.
    picture.push(wall);              // The push() method adds new item to the ends of the array

    for(let i = 1; i < picture.length - 1; i++){
       picture[i] = '*'.concat(picture[i],'*');
       
    }
    return picture;
}

console.log(addBorder(["abc", "ded"]));