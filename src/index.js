import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './redux/reducers'

const store = createStore(combineReducers )
ReactDOM.render(<Provider store={store}>
 <App  />
</Provider>
 , document.getElementById('root'));
