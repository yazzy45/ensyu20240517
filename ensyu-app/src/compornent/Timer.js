
import React, { useState,useEffect } from 'react';

function Timer() {
    const [value, setvalue] = useState(0);

    useEffect(() => {
      const intervalID = setInterval(() => {
          setvalue(value => value + 1);
          }, 1000);
      return () => {
          clearInterval(intervalID);    
      };
    }, []);
  
    return (
      <div>
        <p>{value}</p>
      </div>
    );
  }

export default Timer;
