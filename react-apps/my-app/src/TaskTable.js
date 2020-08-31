import React from 'react'

function TaskTable(props){
    return (
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, i) => {
            return (
              <tr key={i}>
                <td>{task.id}</td>
                <td>{task.title}</td>
            <td><input type='checkbox' checked={task.completed} readOnly/>{task.completed ? 'completed' : 'pending'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}

export default TaskTable