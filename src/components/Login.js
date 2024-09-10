import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <div className="login-card" style={styles.card}>
        <h2 className="text-center" style={styles.title}>Welcome Back</h2>
        <p className="text-center" style={styles.subtitle}>Please enter your username to log in</p>
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="form-control"
            style={styles.input}
          />
        </div>
        <button
          onClick={handleLogin}
          className="btn btn-block"
          style={styles.button}
        >
          Login
        </button>
      </div>
    </div>
  );
};

// Custom styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  input: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    marginBottom: '20px',
    border: '1px solid #ced4da',
    transition: 'border-color 0.2s ease-in-out',
  },
  button: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    border: 'none',
  },
};

export default Login;
