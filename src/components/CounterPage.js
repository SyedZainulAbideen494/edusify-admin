import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CounterPage() {
  const [counts, setCounts] = useState({
    users: 0,
    tasks: 0,
    feedback: 0,
    events: 0,
    userQuizzes: 0,
    aiHistory: 0,
    quizzes: 0,
    flashcardSets: 0,
    flashcards: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, tasks, feedback, events, userQuizzes, aiHistory, quizzes, flashcardSets, flashcards] = await Promise.all([
          axios.get('https://srv594954.hstgr.cloud/admin/users/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/tasks/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/feedback/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/events/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/user_quizzes/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/ai_history/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/quizzes/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/flashcard_sets/count'),
          axios.get('https://srv594954.hstgr.cloud/admin/flashcards/count'),
        ]);
        
        setCounts({
          users: users.data.count,
          tasks: tasks.data.count,
          feedback: feedback.data.count,
          events: events.data.count,
          userQuizzes: userQuizzes.data.count,
          aiHistory: aiHistory.data.count,
          quizzes: quizzes.data.count,
          flashcardSets: flashcardSets.data.count,
          flashcards: flashcards.data.count,
        });
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-panel-page">
      <h2 className="admin-panel-heading">Counts Overview</h2>
      <ul className="admin-panel-list">
        <li>Users: {counts.users}</li>
        <li>Tasks: {counts.tasks}</li>
        <li>Feedback: {counts.feedback}</li>
        <li>Events: {counts.events}</li>
        <li>User Quizzes: {counts.userQuizzes}</li>
        <li>AI History: {counts.aiHistory}</li>
        <li>Quizzes: {counts.quizzes}</li>
        <li>Flashcard Sets: {counts.flashcardSets}</li>
        <li>Flashcards: {counts.flashcards}</li>
      </ul>
    </div>
  );
}

export default CounterPage;
