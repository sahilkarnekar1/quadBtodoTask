import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleReadTask, openModal, setEditTask } from '../reduxFiles/actions';
import EditDialog from './EditDialog';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleRead = (id) => {
    dispatch(toggleReadTask(id));
  };

  const handleEdit = (task) => {
    dispatch(setEditTask(task));
    dispatch(openModal());
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Task List</h2>
      <div className="row">
        {tasks && tasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title">{task.title}</h3>
                <p className="card-text">{task.description}</p>
                <p className={`card-text ${task.isRead ? 'text-success' : 'text-danger'}`}>
                  {task.isRead ? 'Completed' : 'Not Completed'}
                </p>
                <button className="btn btn-primary me-1" onClick={() => handleEdit(task)}>Edit</button>
                <button className="btn btn-danger me-1" onClick={() => handleDelete(task.id)}>Delete</button>
                <button className="btn btn-secondary" onClick={() => handleToggleRead(task.id)}>
                  {task.isRead ? '✓ as Incompleted' : '✓ as Completed'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditDialog />
    </div>
  );
};

export default TaskList;
