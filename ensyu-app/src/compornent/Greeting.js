
import React, { useState } from 'react';

function Greeting({initialName}) {
  const [name, setname] = useState(initialName);

  return (
    <div>
      <h1>「Hello, [{name}]!」</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
    </div>
  );
}

export default Greeting;
