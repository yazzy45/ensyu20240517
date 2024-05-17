
function TodoList({ tasks }) {
  
    return (
      <div>
        {tasks.map((task) => (
          <div>
            <p>{task}</p>
          </div>
        ))}
      </div>
    );
  }

export default TodoList;
