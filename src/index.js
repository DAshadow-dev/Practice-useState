import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Increment from './components/Increment';
import InputField from './components/InputField';
import Toggle from './components/Toggle';
import TodoList from './components/ToDoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import List from './components/List';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Increment /> 
     <InputField /> 
     <Toggle /> 
     <TodoList /> 
     <ColorSwitcher /> 
     <SearchFilter /> 
    <List />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
