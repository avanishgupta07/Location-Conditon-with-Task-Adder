import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, createAccount } from '../redux/actions/authActions';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (isSignup) {
      dispatch(createAccount(username, password));
    } else {
      dispatch(login(username, password));
    }
  };

  return (
    <div className="auth card shadow-sm p-5" style={styles.authCard}>
      <h2 className="text-center mb-4" style={styles.header}>
        {isSignup ? 'Create Account' : 'Login'}
      </h2>
      <div className="form-group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="form-control my-3 p-3"
          style={styles.input}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="form-control my-3 p-3"
          style={styles.input}
        />
      </div>
      <button
        onClick={handleAuth}
        className="btn btn-block"
        style={isSignup ? styles.signupButton : styles.loginButton}
      >
        {isSignup ? 'Sign Up' : 'Login'}
      </button>
      <p className="text-center mt-4">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          className="btn btn-link p-0"
          onClick={() => setIsSignup(!isSignup)}
          style={styles.toggleButton}
        >
          {isSignup ? 'Login here' : 'Create account here'}
        </button>
      </p>
    </div>
  );
};

// Custom styles
const styles = {
  authCard: {
    maxWidth: '400px',
    margin: '100px auto',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#f7f7f7',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderRadius: '5px',
    border: '1px solid #ced4da',
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  signupButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  toggleButton: {
    color: '#007bff',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

export default Auth;
