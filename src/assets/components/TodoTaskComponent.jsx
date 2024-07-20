import '../../styles/todotask.scss'
function TodoTaskComponent({todoTask}) {
  return (
    <div className='todotask'>
      {todoTask.length > 0 ? todoTask.map((task) => (
        <div className="todotask_task" key={task.id}>
          <p>{task.task}</p>
          <button>Remove</button>
        </div> 
      )) : <h2 className="title">Unesi novi task</h2> }
    </div>
  );
}

export default TodoTaskComponent;
