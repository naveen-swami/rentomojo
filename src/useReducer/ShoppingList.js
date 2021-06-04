import React, { useReducer, useRef } from 'react';

const intialState = {
  items: []
};

function reducer(state, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          // id: state.length,
          name: action.name
        }
      ];
    case 'remove':
      return state.filter((object, index) => index !== action.index)
        
  }
}

export default function ShopingList() {
  const shopingItem = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  function submitShopingClickHandler(event) {
    console.log(event.keyCode);

    if (event.which !== 13) {
      return;
    }
    // event.preventDefault();

    dispatch({
      type: 'add',
      name: shopingItem.current.value
    });
    shopingItem.current.value = '';
  }

  function removeItem(index) {
    console.log(index);
    dispatch({
      type: 'remove',
      index: index
    });
  }

  return (
    <div>
      {/* {items} */}

      <input ref={shopingItem} onKeyDown={submitShopingClickHandler} />
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => removeItem(index)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
