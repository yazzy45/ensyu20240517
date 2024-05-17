import {  useState } from "react";
import Child from './Child';
function Parent() {
    const [value, setvalue] = useState("");

    const valueChange = (text) => {
        setvalue(text);
    };
    return (
      <div>
        <Child  valueChange={valueChange}/>
        <p>{value}</p>
      </div>
    );
  }

export default Parent;
