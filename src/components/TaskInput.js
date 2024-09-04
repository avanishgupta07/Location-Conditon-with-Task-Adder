import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ task, priority }));
      setTask('');
    }
  };

  return (
    <div className="task-input mb-4">
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="form-control"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="custom-select"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div className="input-group-append">
          <button onClick={handleAddTask} className="btn btn-success">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
