import React, { useState } from 'react';

const App = () => {

  const [value, setValue] = useState("Hello world !!!");
  // console.log(useState(""))
  // let x = [10, () => {}];
  // const [a, setA] = x;

  // let value = "";

  console.log("Component Update!");

  return (
    <div>
      {/* <button onClick={() => alert(value)}>Click</button> */}

      <input type="text" onChange={e => {
        // console.log(e.target.value);
        // value = e.target.value;
        // console.log(value);

        setValue(e.target.value)
      }}/>

      <h1>{value}</h1>
    </div>
  )
}

export default App;