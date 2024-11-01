import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackPage() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios.get('https://srv594954.hstgr.cloud/admin/feedback')
      .then(response => setFeedback(response.data))
      .catch(error => console.error("Error fetching feedback:", error));
  }, []);

  return (
    <div className="admin-panel-page">
      <h2 className="admin-panel-heading">Feedback</h2>
      <ul className="admin-panel-list">
        {feedback.map(item => (
          <li key={item.id}>{item.message} - {item.created_at}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackPage;
