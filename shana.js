//HOF
//What is HOF?
//HOF is a function that takes a function as an argument and returns a function

function try1(fn) {
    fn();
}

try1(() => {
    console.log("TEST lang");
});

let array = [1, 2, 3, 4, 5];

//foreach
//what is forEach?
//forEach is a function that takes a function as an argument and returns a function
array.forEach((value, index) => {
    console.log(value, index);
});

//map
//what is map?
//map is a function that takes a function as an argument and returns an array

let newArray = array.map((value, index) => {
    return value * 2;
});

console.log(newArray);

//filter
//what is filter?
//filter is a function that takes a function as an argument and returns an array

let filteredArray = array.filter((value, index) => {
    return value % 2 !== 0;
});

console.log(filteredArray);
