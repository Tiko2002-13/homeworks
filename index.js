//1. Given an array of numbers. Write a function to separate odd and even numbers in
//different arrays.



//function separatenumbers(arr) {
//    let arrOddnumbers = [];
//    let arrEvennumbers = [];
//    for(let i = 0;i < arr.length;i++) {
//        if(arr[i] % 2 === 0) {
//            arrEvennumbers.push(arr[i]);
//        } else {
//            arrOddnumbers.push(arr[i]);
//        }
//    }
//    console.log(arrEvennumbers);
//    console.log(arrOddnumbers);
//}
//let givenarr1 = [45, 12, 3, 6, 17, 0];
//let givenarr2 = [1, 3, 5, 9];
//separatenumbers(givenarr1);
//separatenumbers(givenarr2);



//2. Write a function that calculates sum, difference, multiplication and division between
//given array elements depending on passed operation symbol. Write appropriate function
//for each operation.


//function resalt(symboll,arr) {
//    let result;
//    if(symboll === "+") {
//        result = sum(arr);
//    } else if(symboll === "-") {
//        result = difference(arr);
//    } else if(symboll === "*") {
//        result = multiplication(arr);
//    } else if(symboll === "/") {
//        result = division(arr);
//    }
//    return result;
//}

//function sum(arr) {
//    let sum = 0;
//    for(let i = 0;i < arr.length;i++) {
//        sum += arr[i];
//    }
//    return sum;
//}

//function division(arr) {
//    let result = arr[0];
//    for(let i = 1;i < arr.length;i++) {
//        result /= arr[i];
//    }
//    return result;
//}

//function multiplication(arr) {
//    let result = 1;
//    for(let i = 0;i < arr.length;i++) {
//        result *= arr[i];
//    }
//    return result;
//}

//function difference(arr) {
//    let difference = arr[0];
//    for(let i = 1;i < arr.length;i++) {
//        difference -= arr[i];
//    }
//    return difference;
//}

//const givenarray = [2,7,9,12,9];

//console.log(resalt("*",givenarray));
//console.log(resalt("-",givenarray));
//console.log(resalt("+",givenarray));
//console.log(resalt("/",givenarray));


//3.Write a function which receives two strings and removes appearances of the second
//string from the first one.



//function remover(str1,str2) {
//    let newstring = "";
//    let equalcount = 0;
//    let indexforstr2 = 0;
//    let checkingstring = "";
//    if(str2.length !== 1) {
//       for(let i = 0;i < str1.length;i++) {
//            if(str1[i] == str2[indexforstr2]) {
//                equalcount++;
//                indexforstr2++;
//                checkingstring += str1[i];
//            } else if(equalcount != str2.length && equalcount != 0) {
//                equalcount = 0;
//                indexforstr2 = 0;
//                newstring += checkingstring;
//                checkingstring = "";
//            } else {
//                equalcount = 0;
//                indexforstr2 = 0;
//                newstring += str1[i];
//            }
//       }
//    } else {
//        for(let k = 0;k < str1.length;k++) {
//            if(str1[k] !== str2) {
//                newstring += str1[k];
//            }
//        }    
//    }
//    return newstring;
//}

//let givenstring1 = "This is some text.";
//let givenstring2 = "is";

//let givenstring3 = "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather";
//let givenstring4 = "o";

//const result1 = remover(givenstring1,givenstring2);
//const result2 = remover(givenstring3,givenstring4);
//console.log(result1);
//console.log(result2);


//4.Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.



//function reverser(obj) {
//    let newobject = {};
//    let newArray = [];
//    let newarr = [];
//    let count = 0;
//    for(let key in obj) {
//        if(!newArray.includes(obj[key])) {
//            newobject[obj[key]] = key;
//            newArray.push(obj[key]);
//            console.log(newArray);
//        } else if(count === 0) {
//            newarr.push(newobject[obj[key]]);
//            newarr.push(key);
//            newobject[obj[key]] = newarr;
//            count++;
//        } else {
//            newarr.push(key);
//            newobject[obj[key]] = newarr;
//        }
//    }
//    return newobject;
//}
//let givenobject = {
//    a: 1,
//    b: 2,
//    c: 2,
//    d: 2
//}

//console.log(reverser(givenobject));


//5.Given two objects. Write a function that performs shallow compare.


function compare(obj1,obj2) {
    let firstobjitemcount = 0;
    let secondobjitemcount = 0;
    for (let key1 in obj1) {
        firstobjitemcount++;
    }
    for(let key2 in obj2) {
        secondobjitemcount++;
    }
    if(firstobjitemcount !== secondobjitemcount) {
        return false;
    }
    for(let key1 in obj1) {
        if(obj2.hasOwnProperty(key1)) {
            if(obj1[key1] !== obj2[key1]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}
let a = {};
let b = {};

console.log(compare(a,b));