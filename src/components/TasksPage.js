import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://srv594954.hstgr.cloud/admin/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="admin-panel-page">
      <h2 className="admin-panel-heading">Tasks</h2>
      <table className="admin-panel-table">
        <thead>
          <tr><th>Title</th><th>Description</th><th>User ID</th><th>Due Date</th></tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.user_id}</td>
              <td>{task.due_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasksPage;
