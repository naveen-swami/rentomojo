import React from 'react';
import { useReducer, useState } from 'react/cjs/react.development';
import ShoppingList from './ShoppingList';


const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        return state;
    }
  }

export default function () {

    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count } = state;

    return (
        <div>
            {/* <p>{count}</p> */}
            <p>Count: {count}</p>
            Use Reducer exmple naveen

            <button onClick={() => dispatch({ type: "increment" })}>
                incremnet
            </button>

            <button onClick={() => dispatch({ type: "decrement" })}>
                decrement
            </button>

            <div>
              <ShoppingList />
            </div>



            {/* <button onClick={() => setCount(count + 1)}>
                incremnet
                </button>
                
                <button onClick={() => setCount(count - 1)}>
                decremnt
              </button> */}
              </div>
        // </div>
    );
}


// export default function App() {

//     const [state, dispatch] = useReducer((state = 0, action) => {
//           console.log("state: ",state);
//           console.log("action: ",action);
//           return state + action;
//       },0)
  
//     return (
//       <div>
//           count: {state}
//           <button onClick={() => dispatch(1)}>+</button>
//       </div>
//     );
//   }


// export default function App() {

//     const intialState = {count: 0};
  
//     const [state, dispatch] = useReducer((state = 0, action) => {
//           console.log("state: ",state);
//           console.log("action: ",action);
//           switch(action.type) {
//             case '+':
//           return {count: state.count + 1}
//           case '-':
//           return {count: state.count0 - 1};
//           }
//       },intialState)
          
  
//     return (
//       <div>
//           <button onClick={() => dispatch({type:"-"})}>-</button>
//           count: {state.count}
//           <button onClick={() => dispatch({type:"+"})}>+</button>
//       </div>
//     );
//   }