import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserQuizzesPage() {
  const [userQuizzes, setUserQuizzes] = useState([]);

  useEffect(() => {
    axios.get('https://srv594954.hstgr.cloud/admin/user_quizzes')
      .then(response => setUserQuizzes(response.data))
      .catch(error => console.error("Error fetching user quizzes:", error));
  }, []);

  return (
    <div>
      <h2>User Quizzes</h2>
      <table>
        <thead>
          <tr><th>Quiz ID</th><th>User ID</th><th>Score</th></tr>
        </thead>
        <tbody>
          {userQuizzes.map(quiz => (
            <tr key={quiz.id}>
              <td>{quiz.quiz_id}</td>
              <td>{quiz.user_id}</td>
              <td>{quiz.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserQuizzesPage;
