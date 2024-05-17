
import React, { useState } from 'react';

function Counter() {
  const [value, setvalue] = useState(0);

  const increment = () => {
    setvalue(value => value + 1);
  };
  return (
    <div>
      <p>{value}</p>
        <button onClick={increment} >+1</button>
    </div>
  );
}

export default Counter;
