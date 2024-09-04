import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
});

export default store;
