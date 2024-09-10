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
    <div className="task-input mb-4" style={styles.container}>
      <div className="input-group" style={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="form-control"
          style={styles.input}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="custom-select"
          style={styles.select}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <div className="input-group-append">
          <button onClick={handleAddTask} className="btn btn-success" style={styles.button}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

// Custom styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    borderRadius: '5px 0 0 5px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ced4da',
  },
  select: {
    borderRadius: '0',
    border: '1px solid #ced4da',
    padding: '10px',
    marginLeft: '-1px',
  },
  button: {
    borderRadius: '0 5px 5px 0',
    padding: '10px 20px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default TaskInput;
