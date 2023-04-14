function TaskList({ tasks }) {
    return (
        <div className="tasklist">
            {tasks.map((task) => (
            <div key={task.id}>
                <p>{task.name}</p>
                <p>{task.deadlines} </p>
                <p>{task.category}</p>
            </div>
        ))}
        </div>
    )
}

export default TaskList