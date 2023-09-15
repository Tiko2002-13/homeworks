//1. Given an array. Write a recursive function that returns the sum of it. (Hint: arr.pop())
function recursiveSum(arr,sum = 0) {
    if(arr.length === 0) {
        return sum;
    }
    sum += arr.pop();
    return recursiveSum(arr,sum);
}
console.log(recursiveSum([1, 10, 12, 3]));


//2. Given a number. Write a recursive function that reverse the number. Return the new number.
function recursivereverse(num,reversednum = 0) {
    if(num === 0) {
        return reversednum;
    }
    let mnacord = num % 10;
    reversednum += mnacord * (10 ** (num.toString().length - 1)) ;
    num = num - mnacord;
    num = num / 10;
    return recursivereverse(num,reversednum);
}
console.log(recursivereverse(2));


/* 3  Given a string, compute recursively (no loops) a new string where all appearances of pi
have been replaced by 3.14. */

function replacer(str,result = "",iterator = 0,checking = "pi",index = 0,current = "") {
    if(iterator === str.length) {
        return result;
    }
    if(str[iterator] === checking[index]) {
        index = index + 1;
        current += checking[index];
    }else if(index === 2) {
        index = 0;
        result += "3.14";
        result += str[iterator]
    } else if(index !== 0) {
        index = 0;
        result += current;
        current = "";
    } else {
        result += str[iterator];
    }
    return replacer(str,result,iterator + 1,checking,index,current);
}
console.log(replacer("Picsart pipelines"));
console.log(replacer("picturespicturespictures"));

//4. Given a string. Return true, if it is mirror symmetric to its middle symbol.

function isPalindrome(str,iterator = 0,checker = true) {
    if(iterator > str.length / 2) {
        return checker
    }
    if(str[iterator] !== str[str.length - (iterator + 1)]) {
        checker = false
    }
    return isPalindrome(str,iterator + 1,checker);
}
console.log(isPalindrome("abcdabcd"));

/* 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).*/

function flatten(nestedarr,result = [],iterator = 0,count = 0) {
    if(iterator === nestedarr.length && count === 0) {
        return result;
    } else if(iterator === nestedarr.length){
        iterator = 0;
        nestedarr = result;
        result = [];
        count = 0;
    }
    if(Array.isArray(nestedarr[iterator])) {
        result.push(...nestedarr[iterator]);
        count++;
    } else {
        result.push(nestedarr[iterator]);
    }
    return flatten(nestedarr,result,iterator + 1,count)
}

console.log(flatten([14, [1, [[[3, []]], 1], 0]]));

/* 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result. */

function sumofDigits(number,sum = 0)  {
    if(number === 0 && sum < 10) {
        return sum;
    } else if(number === 0){
        number = sum;
        sum = 0;
    }
    sum += number % 10;
    number -= number % 10;
    number = number / 10;
    return sumofDigits(number,sum);
}

console.log(sumofDigits(999999999999));


