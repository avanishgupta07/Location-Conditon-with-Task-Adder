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
    <div className="login">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="form-control"
      />
      <button onClick={handleLogin} className="btn btn-success mt-2">Login</button>
    </div>
  );
};

export default Login;
