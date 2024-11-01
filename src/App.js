import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TasksPage from './components/TasksPage';
import FeedbackPage from './components/FeedbackPage';
import EventsPage from './components/EventsPage';
import UserQuizzesPage from './components/UserQuizzesPage';
import AIHistoryPage from './components/AIHistoryPage';
import CounterPage from './components/CounterPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          {/* Add routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
