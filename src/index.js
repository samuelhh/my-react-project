import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCounter from './ClickCounter';
// import TodoList from './lesson/todolist/TodoList';
// import ControlPanel from './lesson/counter/ControlPanel';
import Hanhui from './hanhui';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Hanhui />,
    document.getElementById('root')
);
registerServiceWorker();