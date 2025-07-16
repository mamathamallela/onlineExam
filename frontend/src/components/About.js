import React from 'react';
import './About.css'; // optional, for your styles

function About() {
  return (
    <div className="about-container">
      <h1>About Digital Examination Platform</h1>
      <p>
        Our Digital Examination Platform is designed to make online exams secure,
        convenient, and efficient. It provides role-based access for superadmins,
        admins, and users, ensuring proper control and management of exam activities.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Secure Login:</strong> Email/password authentication with role-based access.</li>
        <li><strong>Notifications:</strong> Admins can create and manage exam notifications.</li>
        <li><strong>User Registration:</strong> Candidates can register for exams and receive automated emails with exam details and links.</li>
        <li><strong>Identity Verification:</strong> Camera activation and user photo before exam starts.</li>
        <li><strong>Timed Exams:</strong> Integrated timer and multiple-choice questions.</li>
        <li><strong>Instant Results:</strong> Detailed scorecard upon completion.</li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        We aim to simplify the examination process for institutions and candidates by leveraging
        modern web technologies with a focus on security and user experience.
      </p>

      <h2>Try It Now</h2>
      <p>
        Go back to <a href="/">Home</a> to see the latest notifications and get started.
      </p>
    </div>
  );
}

export default About;
