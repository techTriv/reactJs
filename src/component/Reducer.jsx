import React, { useReducer } from "react";
const initialState = 0;
const reducerFun = (state, action) => {
  console.log(state, "--reducer--", action);
  switch (action.type) {
    case "increament":
      return state + 2;
    case "decreament":
      return state - 1;

    default:
      return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFun, initialState);

  return (
    <div>
      <h1>Reducer</h1>
      <p>{`count is ${state}`}</p>
      <button
        onClick={() => dispatch({ type: "increament" })}
        className="p-5 bg-amber-800 text-4xl"
      >
        Click
      </button>
    </div>
  );
};

export default Reducer;
