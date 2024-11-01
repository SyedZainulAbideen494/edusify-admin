import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AIHistoryPage() {
  const [aiHistory, setAIHistory] = useState([]);

  useEffect(() => {
    axios.get('https://srv594954.hstgr.cloud/admin/ai_history')
      .then(response => setAIHistory(response.data))
      .catch(error => console.error("Error fetching AI history:", error));
  }, []);

  return (
    <div>
      <h2>AI History</h2>
      <table>
        <thead>
          <tr><th>User Message</th><th>AI Response</th><th>User ID</th></tr>
        </thead>
        <tbody>
          {aiHistory.map(entry => (
            <tr key={entry.id}>
              <td>{entry.user_message}</td>
              <td>{entry.ai_response}</td>
              <td>{entry.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AIHistoryPage;
