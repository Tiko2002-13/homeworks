//Implement string methods 
//1.includes 

function includes(str1,str2)  {
    let checkingarray = str1.split("");
    let str2index = 0;
    if(str2.length === 1) {    
        for(let i = 0;i < checkingarray.length;i++) {
            if(checkingarray[i] === str2) {
                return true
            }
        }
    } else {
        for(let j = 0;j < checkingarray.length;j++) {
            if(checkingarray[j] === str2[str2index]) {
                str2index++
            } else if(str2index === str2.length) {
                return true
            } else {
                str2index = 0;
            }
        }
    }
    return false
}

console.log(includes("arda asdasda dasdasd ","rda"))

//2.indexOf


function indexOf(str1,str2)  {
    let checkingarray = str1.split("");
    let str2index = 0;
    if(str2.length === 1) {    
        for(let i = 0;i < checkingarray.length;i++) {
            if(checkingarray[i] === str2) {
                return i
            }
        }
    } else {
        for(let j = 0;j < checkingarray.length;j++) {
            if(checkingarray[j] === str2[str2index]) {
                str2index++
            } else if(str2index === str2.length) {
                return j - str2index
            } else {
                str2index = 0;
            }
        }
    }
    return -1;
}

console.log(indexOf("Hello my name is Ben ","my"))
console.log(indexOf("Hello  name is Ben ","my"))


//3.replace

function replace(str,str1,str2)  {
    let checkingarray = str.split("");
    let str1index = 0;
    let result = "";
    let index;
    let checker = true;
    function short(checkingarray,str1,str2) {
        let result = "";
        for(let i = 0;i < checkingarray.length;i++) {
            if(checkingarray[i] === str1) {
                result += str2;
            } else {
                result += checkingarray[i];
            }  
        }
    }
    function long(checkingarray,str1) {
        for(let j = 0;j < checkingarray.length;j++) {
            if(checkingarray[j] === str1[str1index]) {
                str1index++
            } else if(str1index === str1.length) {
                return index =  j - str1index;
            } else {
                str1index = 0;
            }
        }
    }
    if(str1.length === 1) {    
        result = short(checkingarray,str1,str2);
    } else {
        index = long(checkingarray,str1);
        for(let k = 0;k < checkingarray.length;k++) {
            if(k === index) {
                result += str2;
            } else if(k === index + (str1.length - 1)) {
                checker = false
            } else if(k < index || checker === false) {
                result += checkingarray[k]
            }
        }
    }
    return result
}

console.log(replace("Hello my name is Ben ","my name","avarda"))

//4.replaceAll

function replaceAll(str,str1,str2)  {
    let checkingarray = str.split("");
    let str1index = 0;
    let result = "";
    let index;
    let checker = true;
    function short(checkingarray,str1,str2) {
        let result = "";
        for(let i = 0;i < checkingarray.length;i++) {
            if(checkingarray[i] === str1) {
                result += str2;
            } else {
                result += checkingarray[i];
            }  
        }
        return result
    }
    function long(checkingarray,str1) {
        let indexarr = [];
        for(let j = 0;j < checkingarray.length;j++) {
            if(checkingarray[j] === str1[str1index]) {
                str1index++
            } else if(str1index === str1.length) {
                indexarr.push(index =  j - str1index);
                str1index = 0;
            } else {
                str1index = 0;
            }
        }
        return indexarr
    }
    if(str1.length === 1) {    
        result = short(checkingarray,str1,str2);
    } else {
        index = long(checkingarray,str1);
        let endofindex = index.map(item => item + (str1.length - 1));
        let ind = 0;
        for(let k = 0;k < checkingarray.length;k++) {
            if(index.includes(k)) {
                result += str2;
                checker = true;
            } else if(k === endofindex[ind]) {
                checker = false;
                ind++;
            } else if(!index.includes(k) || checker === false) {
                result += checkingarray[k]
            }
        }
    }
    return result
}

console.log(replaceAll("Hello my name is my Benjamin","am","your"))


//Array methods
//1.includes


function arrincludes(arr,item)  {
    for(let i = 0;i < arr.length;i++) {
        if(arr[i]  === item) {
            return true
        }
    }
    return false
}


console.log(arrincludes([1,23,5,3],1))

//2.indexof

function indexOfarr(arr,item)  {
    for(let i = 0;i < arr.length;i++) {
        if(item === arr[i]) {
            return i
        } 
    }
    return -1;
}

//3.slice

console.log(indexOfarr([1,23,5,3],5))

function slice(arr,start,end)  {
    let result = [];
    for(let i = 0;i < arr.length;i++) {
        if(i >= start && i < end) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(slice([32,2,5,8,23,1],1,4));