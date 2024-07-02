import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reduxFiles/actions';
import { Link } from "react-router-dom";
import TaskList from './TaskList';

const AddTask = () => {
  const [task, setTask] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task, id: Date.now(), isRead: false };
    dispatch(addTask(newTask));
    setTask({ title: '', description: '' });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Management</h1>
      <div className="text-center mb-4">
        <Link to="/taskList">
          <button className="btn btn-primary">View Tasks List</button>
        </Link>
      </div>
      <div className="card p-4 shadow">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter task title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Task Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter task description"
              required
            />
          </div>
          <button type="submit" className="btn btn-success btn-block mt-1">
            Add Task
          </button>
        </form>
      </div>
      <TaskList />
    </div>
  );
};

export default AddTask;
