import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const userRoles = {
    user: 'user', // Regular user
    supportiveStaff: 'supportive-staff', // Supportive staff user
  };

  const validateInputs = () => {
    if (username === '' || password === '') {
      setErrorMessage('Username and password are required.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateInputs()) return;

    
    let role;
    if (username === 'supportive' && password === 'staff123') {
      role = userRoles.supportiveStaff;
    } else if (username === 'user' && password === 'user123') {
      role = userRoles.user;
    } else {
      setErrorMessage('Invalid username or password.');
      return;
    }

    
    if (role === userRoles.user) {
      navigate('/add-complaint');
    } else if (role === userRoles.supportiveStaff) {
      navigate('/complaint-details');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome!</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
