const state = {
    counter: 5, subCounter: 2, subState: {
        subStateName: "Naveen",
    }
}
console.log(state);

const state1 = state;
state1.counter = 2;

// both are same state and state1
console.log(state);
console.log(state1);

// using spread operator we can acchive first lever copy so that both state are differnt
// ... spread operator helps to 1st level copy
const state2 = { ...state };
state2.counter = 1;
console.log(state);
console.log(state2);

// now both state's subState are same because ...state does not do deep copy
state2.subState.subStateName = "Swami";
console.log(state);
console.log(state2);

// using assign method we can acihve 1st level copy so that both state are differnt
const state3 = Object.assign({}, state);
state3.counter = 10;
console.log(state);
console.log(state3);

// now both state's subState are same because assign method does not do deep copy
state3.subState.subStateName = "Kumar";
console.log(state);
console.log(state3);

// in this we can update subState
// here state's subState are different 
const state4 = { ...state, subState: { subStateName: "Naveen Swami" } };
console.log("State: ",state);
console.log(state4);

