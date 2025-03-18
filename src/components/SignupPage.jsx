import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './SignupPage.css';

    function SignupPage({ onSignup }) {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(email, password);
      };

      return (
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      );
    }

    export default SignupPage;
