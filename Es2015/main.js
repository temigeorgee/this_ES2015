let person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(() => console.log(`Your name is ${this.fullName}`)
        .bind(this),1000)
    }
}

let name = "Josie"
console.log(`When ${name} comes home, so good`)

const DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 50;

var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
var [a, b] = [1, 2];
[a, b] = [b, a];

function double(arr){
    return arr.map((val) => val*2);
   }


var obj = {
    numbers: {
       a: 1,
       b: 2
   } 
 }

var {a,b} = obj.numbers;


function add(a = 10, b = 10) {
    return a + b;
  }
  //or better
var add = (a = 10, b = 10) => a + b;

//`Array.from` - It allows you to create arrays from array like objects, 
 // things with a length property and indexed elements - has the optional parameter 
  //.map() to perform a function on each element in the new array. which syntax would be 
//like: Array.from(obj, mapFn, thisArg) E.g: Array.from([1, 2, 3], x => x + x) //[2, 4, 6]


// `Object.assign` - _not a deep clone_ but basically copies the enumerable and own properties from a source object to a target object. 
 //Uses get on source and set on target - so it assigns properties vs just copying or defining new properties 
 //example of cloning an object - BUT not a deep clone
//  var obj = {a: 1};
//  var copy = Object.assign({}, obj)
// console.log(copy);
// {a: 1}


// `Array.includes` - determines if an array includes a certain element, returns a boolean.
// `syntax`
// arr.includes(searchElement);
// arr.includes(searchElement, fromIndex);

// `Parameter`: the element to search for and the optional fromIndex: the position in this array at which to begin searching for the searched element, 
// a negative value searches from the index of array.length + fromIndex. defaults to zero
// `for example`
// var a = [1, 2, 3];
// a.includes(2); 
// a.includes(6,1)


// `String.startsWith` - determines whether a string begins with the characters of a specified string, returning boolean
// `for example`
// stringAnything.startsWith("what im searching for", position);

// var str = 'good morning world';
// console.log(str.startsWith('good'));   
