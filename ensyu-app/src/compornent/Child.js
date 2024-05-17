
function Child({ valueChange }) {

    const handleChange = (e) => {
        valueChange(e.target.value);
    };
      
    return (
      <div>
            <input type="textbox"  onChange={handleChange}/>
      </div>
    );
  }

export default Child;
