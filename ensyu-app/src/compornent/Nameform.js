
import React, { useState } from 'react';

function NameForm() {
  const [name, setname] = useState("");

    const handleAlert = (name) => {
        alert(name);
    }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
        <button onClick={() =>handleAlert(name)}>送信</button>
    </div>
  );
}

export default NameForm;
