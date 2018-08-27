import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import ClickCounter from './ClickCounter';
// import TodoList from './lesson/todolist/TodoList';
import ControlPanel from './lesson/redux-context/views/ControlPanel';
// import Hanhui from './hanhui';
// import Echarts from './lesson/echarts/echarts';

//专门针对redux-context
import store from './lesson/redux-context/Store';
import Provider from './lesson/redux-context/Provider';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);