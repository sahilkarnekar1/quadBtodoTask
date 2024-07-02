import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, closeModal, setEditTask } from '../reduxFiles/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const EditDialog = () => {
  const dispatch = useDispatch();
  const { isOpen, editTask } = useSelector((state) => state.modal);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTask(editTask));
    dispatch(closeModal());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setEditTask({ ...editTask, [name]: value }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeModal())}
      style={customStyles}
      contentLabel="Edit Task Modal"
    >
      {editTask && (
        <div className="container">
          <h3 className="text-center mb-4">Edit Task</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                value={editTask.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                className="form-control"
                value={editTask.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button type="submit" className="btn btn-primary">Update Task</button>
              <button type="button" className="btn btn-secondary" onClick={() => dispatch(closeModal())}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default EditDialog;
