const array1 = [1, 2, 3, 4 , 13];
//1 array find

function myfind(func) {
    for(let i = 0;i < this.length;i++) {
        if(func(this[i])) {
            return this[i];
        } 
    }
}

array1.myfind = myfind;
const result = array1.myfind(item => item > 2);
console.log(result)

//2.array map

function mymap(func) {
    let res = [];
    for(let i = 0;i < this.length;i++) {
        res.push(func(this[i]))
    }
    return res;
}

array1.mymap = mymap
const result1 = array1.mymap(item => item * 5)
console.log(result1)

//3 array findIndex

function myfindindex(func) {
    for(let i = 0;i < this.length;i++) {
        if(func(this[i])) {
            return i;
        } 
    }
    return -1;
}

array1.myfindindex = myfindindex;
const result2 = array1.myfindindex(item => item < 2);
console.log(result2);


//4 array reduce

function myreduce(func,firstval) {
    let sum = 0;
    for(let i = 0;i < this.length;i++) {
        if(firstval !== undefined && firstval === 0) {
            sum += func(firstval,this[i])
        } else if(firstval === undefined){
            firstval = 0;
            sum += func(firstval,this[i])
        } else if(firstval !== 0 && firstval !== undefined) {
            if(i === 0) {
                sum += firstval;
                firstval = 0;
                sum += func(firstval,this[i])
            } else {
                sum += func(firstval,this[i])
            }
        }
    }
    return sum;
}

array1.myreduce = myreduce;
const initialValue = 27;
const result3 = array1.myreduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(result3)