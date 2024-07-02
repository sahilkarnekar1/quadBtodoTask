import { createStore, combineReducers } from 'redux';

// Initial state
const initialTaskState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const initialModalState = {
  isOpen: false,
  editTask: null,
};

// Task reducer
const taskReducer = (state = initialTaskState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };
    case 'UPDATE_TASK':
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };
    case 'TOGGLE_READ_TASK':
      const toggledTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, isRead: !task.isRead } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return { ...state, tasks: toggledTasks };
    default:
      return state;
  }
};

// Modal reducer
const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, isOpen: false, editTask: null };
    case 'SET_EDIT_TASK':
      return { ...state, editTask: action.payload };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  modal: modalReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
