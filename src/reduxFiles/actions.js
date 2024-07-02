export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const updateTask = (task) => ({
  type: 'UPDATE_TASK',
  payload: task,
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const toggleReadTask = (id) => ({
  type: 'TOGGLE_READ_TASK',
  payload: id,
});

export const openModal = () => ({
  type: 'OPEN_MODAL',
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});

export const setEditTask = (task) => ({
  type: 'SET_EDIT_TASK',
  payload: task,
});
