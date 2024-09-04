import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Auth from './components/Auth';
import { logout } from './redux/actions/authActions';
import Weather from './components/Weather';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  return (
  
    <div className="app container">
      <h1 className="text-center my-4">Advanced To-Do Application</h1>
      {!isAuthenticated ? (
        <Auth />
      ) : (
        <div className="card shadow-sm p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Welcome {username}!</h2>
            <Weather/>
            <button onClick={() => dispatch(logout())} className="btn btn-danger">
              Logout
            </button>
          </div>
          <TaskInput />
        
        
          <TaskList />
   
        </div>
      )}
             <div>
       
    </div>
    </div>
  );
};

export default App;
