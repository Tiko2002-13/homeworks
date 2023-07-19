//1.Given a string. Check whether the string is palindrome or not.


function isPalindrome(givenstring) {
    for(let i = 0;i < givenstring.length / 2;i++) {
        if(givenstring[i] !== givenstring[givenstring.length - (i + 1)]) {
            return "No";
        }
    }
    return "Yes";
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("T"));
console.log(isPalindrome("“”"));
console.log(isPalindrome("palindrome"));



//2.Given a string and symbols. Change first symbol by the second one in the string.



function replaceStrToSymbol(str,symbol1,symbol2) {
    let result = "";
    for(let i = 0;i < str.length;i++) {
        if(str[i] === symbol1) {
            result += symbol2;
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(replaceStrToSymbol("The results are not recorded yet","t","w"))
console.log(replaceStrToSymbol("does the following code","o","0"));



//3.Print the following number pattern (write a function)



function printer(from1togivennumber) {
    let str = "";
    for(let i = 1; i < (from1togivennumber + 1);i++) {
        str += i;
        console.log(str)
        "\n";
    }
    let newstr = str;
    for(let i = from1togivennumber;i > 1;i--) {
        newstr = newstr.slice(0,- 1);
        console.log(newstr);
        "\n";
    }
}
printer(8);



//4.Print following pattern (write a function)

function printstars(itemscount) {
    let str = "*";
    let spacearray = [];
    for(let i = 0;i < itemscount;i++) {
        console.log(str);
        "\n";
        spacearray.push("        ");
        str = spacearray.join() + str;
        spacearray = [];
    }
}

printstars(7);



//5. Print following pattern (write a function)




function print(tox,syun)  {
    let item = "*";
    let construct = [];
    let firstlineindex = 0;
    let lastlineindex = 1;
    let firstcolumnindex = 0;
    let lastcolumnindex = 1;
    let condition;
    for(let i = 0;i < tox;i++) {
        construct[i] = [];
        for(let j = 0;j < syun;j++) {
            condition = (i === firstlineindex || i === (tox - lastlineindex)) && (j === firstcolumnindex || j === (syun - lastcolumnindex));
            if(condition) {
                construct[i][j] = item;
            } 
        }
        firstlineindex++;
        lastlineindex++;
        firstcolumnindex += 2;
        lastcolumnindex += 2;
    }
    return construct;
}
console.log(print(7,13));
console.log(print(5,9));




//6. Print following pattern (write a function)



function matrix(m,n)   {
    let item = "*";
    let matrix = [];
    for(let i = 0;i < m;i++) {
        matrix[i] = [];
        for(let j = 0;j < n;j++) {
            matrix[i][j] = item; 
        }
    }
    return matrix;
}
console.log(matrix(6,9));
