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
    <div className="auth card shadow-sm p-4">
      <h2 className="text-center mb-4">{isSignup ? 'Create Account' : 'Login'}</h2>
      <div className="form-group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="form-control my-2"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="form-control my-2"
        />
      </div>
      <button onClick={handleAuth} className="btn btn-primary btn-block">
        {isSignup ? 'Sign Up' : 'Login'}
      </button>
      <p className="text-center mt-3">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button className="btn btn-link p-0" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Login here' : 'Create account here'}
        </button>
      </p>
    </div>
  );
};

export default Auth;
