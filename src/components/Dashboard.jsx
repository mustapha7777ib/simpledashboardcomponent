import React from 'react';
import './Dashboard.css'; // or use Tailwind classes directly

const Dashboard = () => {
  const user = "Mustapha";

  const activities = [
    "Product added - Hair Oil",
    "Order #1234 placed",
    "Stock updated - Face Cream",
    "Review received - Beard Oil"
  ];

  return (
    <div className="dashboard-container">
      <h1 className="header">Welcome back, {user}</h1>

      <div className="stats-cards">
        <div className="card">
          <h2>Total Orders</h2>
          <p>120</p>
        </div>
        <div className="card">
          <h2>Products in Stock</h2>
          <p>45</p>
        </div>
        <div className="card">
          <h2>Pending Reviews</h2>
          <p>8</p>
        </div>
      </div>

      <div className="activity-section">
        <h3>Recent Activities</h3>
        <ul>
          {activities.map((act, index) => (
            <li key={index}>{act}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
