import React, { useState } from "react";

function Form() {
  const [state, setState] = useState({
    userName: "",
    address: "",
  });

  const handleUserName = (event) => {
    setState({
      ...state,
      userName: event.target.value,
    });
  };

  const handleAddress = (event) => {
    setState({
      ...state,
      address: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    alert(`${state.userName} ${state.address}`);
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>UserName : </label>
        <input type="text" value={state.userName} onChange={handleUserName} />
      </div>

      <div>
        <label>Address : </label>
        <input type="text" value={state.address} onChange={handleAddress} />
      </div>

      <button>Submit</button>
    </form>
  );
}

export default Form;
