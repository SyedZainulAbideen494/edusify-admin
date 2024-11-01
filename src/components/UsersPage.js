import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin-panel.css'
function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://srv594954.hstgr.cloud/admin/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="admin-panel-page">
      <h2 className="admin-panel-heading">Users</h2>
      <table className="admin-panel-table">
        <thead>
          <tr>
          <th>ID</th> <th>Username</th><th>Unique ID</th><th>Email</th><th>Phone</th><th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.unique_id}>
                 <td>{user.id}</td>
              <td>{user.user_name}</td>
              <td>{user.unique_id}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td><img src={user.avatar} alt="Avatar" className="admin-panel-avatar" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
