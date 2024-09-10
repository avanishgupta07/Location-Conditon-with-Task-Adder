import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list mt-4" style={styles.container}>
      {Array.isArray(tasks) && tasks.length === 0 ? (
        <p className="text-center text-muted" style={styles.noTasks}>
          No tasks added yet.
        </p>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className={`task-item alert alert-${task.priority.toLowerCase()}`}
            style={styles.taskItem}
          >
            <div className="d-flex justify-content-between align-items-center">
              <span style={styles.taskText}>
                {task.task} - <strong>{task.priority}</strong>
              </span>
              <button
                onClick={() => dispatch(deleteTask(index))}
                className="btn btn-danger btn-sm"
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

// Custom Styles
const styles = {
  container: {
    width: '60%', // Increased width to 60% of the available space
    margin: '0 auto', // Center the task list container horizontally
    padding: '20px', // Increased padding for more space
    backgroundColor: '#fff',
    borderRadius: '12px', // Rounded corners
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', // Enhanced shadow for more depth
    minHeight: '200px', // Increased minimum height
  },
  noTasks: {
    fontStyle: 'italic',
    color: '#888',
    fontSize: '18px', // Larger font size for visibility
  },
  taskItem: {
    borderRadius: '12px', // Rounded corners for task items
    padding: '15px 20px', // Increased padding inside task items
    marginBottom: '15px', // Increased margin between items
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    backgroundColor: '#f9f9f9', // Slightly tinted background for task items
  },
  taskText: {
    fontSize: '18px', // Larger font size for task text
    color: '#333',
  },
  deleteButton: {
    fontSize: '16px', // Larger font size for delete button
    padding: '6px 12px', // Increased padding for better click area
    transition: 'background-color 0.3s ease, transform 0.2s ease-in-out',
  },
};

export default TaskList;
