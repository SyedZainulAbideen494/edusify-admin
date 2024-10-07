import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Function to fetch total users count
    const fetchTotalUsers = () => {
      fetch("https://dropment.online/api/total-users/admin")
        .then((response) => response.json())
        .then((data) => {
          setTotalUsers(data.totalUsers);
        })
        .catch((error) => {
          console.error("Error fetching total users:", error);
        });
    };

    // Initial fetch when the component mounts
    fetchTotalUsers();

    // Set an interval to update the count every 10 seconds (10000 milliseconds)
    const intervalId = setInterval(fetchTotalUsers, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Dashboard</h1>
      <div className="top-stats-container">
        <div className="stat-card large">
          <h2>Total Users</h2>
          <p>{new Intl.NumberFormat().format(totalUsers)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
