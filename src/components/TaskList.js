import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {Array.isArray(tasks) && tasks.length === 0 ? (
        <p className="text-center text-muted">No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className={`task-item alert alert-${task.priority.toLowerCase()}`}
          >
            <div className="d-flex justify-content-between">
              <span>{task.task} - <strong>{task.priority}</strong></span>
              <button
                onClick={() => dispatch(deleteTask(index))}
                className="btn btn-danger btn-sm"
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

export default TaskList;
// aba6ff9d6de967d5eac6fd79114693cc
