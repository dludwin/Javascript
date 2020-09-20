
        function toArray(obj) {
	        return Object.entries(obj);
        }

        function toArray2(obj) {
	        return Object.keys(obj).map(x => [x, obj[x]]);
        }

        console.log(toArray({ a: 1, b: 2 }));
        console.log(toArray({ shrimp: 15, tots: 12 }));
        console.log(toArray({}));

        console.log(toArray2({ a: 1, b: 2 }));
        console.log(toArray2({ shrimp: 15, tots: 12 }));
        console.log(toArray2({}));

/*         The Object.entries() method returns an array of a giv
        object's own enumerable string-keyed property [ key , value ] 
        pairs, */

        /* The map() method creates a new array with the results
         of calling a function for every array element */