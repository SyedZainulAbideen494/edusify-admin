import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="admin-header">
      <div className="admin-header-logo">Admin Panel</div>
      <nav className="admin-nav">
        <Link to="/" className="admin-nav-link">Dashboard</Link>
        <Link to="/users" className="admin-nav-link">Users</Link>
        <Link to="/tasks" className="admin-nav-link">Tasks</Link>
        <Link to="/feedback" className="admin-nav-link">Feedback</Link>
        <Link to="/events" className="admin-nav-link">Events</Link>
        <Link to="/user-quizzes" className="admin-nav-link">User Quizzes</Link>
        <Link to="/ai-history" className="admin-nav-link">AI History</Link>
        <Link to="/quizzes" className="admin-nav-link">Quizzes</Link>
        <Link to="/flashcards" className="admin-nav-link">Flashcards</Link>
      </nav>
    </header>
  );
}

export default Header;
