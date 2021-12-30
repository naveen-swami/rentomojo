

// ######################################### IMP ##################################

// https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

// ######################################### IMP ##################################

// function * generatorFunction() { // Line 1
//     console.log('This will be executed first.');
//     yield 'Hello, ';   // Line 2
//     console.log('I will be printed after the pause');  
//     yield 'World!';
//   }
//   const generatorObject = generatorFunction(); // Line 3
//   console.log(generatorObject.next().value); // Line 4

function * firstGenertorFunction() {
    console.log("Inside first genertor function");
    yield 'yeild 1';
    console.log("=======");
    yield console.log("yield 2");
}

const firstGenertorFunctionObj = firstGenertorFunction();
console.log(firstGenertorFunctionObj.next()); // { value: 'yeild 1', done: false }
console.log(firstGenertorFunctionObj.next().value);
console.log(firstGenertorFunctionObj.next()); 
console.log(firstGenertorFunctionObj.next()); 
// console.log("working....");


function* fetchData() {
    const a = yield 'data 1';
    console.log("get a = ", a);
    const b = yield 'data 2';
    console.log("get b = ", b);
    // return {data: true, status: "ok"}
    return "done";
}
console.log("fetching data......");
const fetchDataObj = fetchData();
console.log(fetchDataObj.next());
console.log(fetchDataObj.next());
console.log(fetchDataObj.next());