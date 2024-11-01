import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://srv594954.hstgr.cloud/admin/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <table>
        <thead>
          <tr><th>Title</th><th>Date</th><th>User ID</th></tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventsPage;
