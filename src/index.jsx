// import ReactDOM from "react-dom/client";

// import App from "./App.jsx";
// import "./styles.css";

// const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
