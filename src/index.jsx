import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./App.jsx";
import "./index.css";
import "./weeklytodos.css";
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom'

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <React.StrictMode>
        
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        
    </React.StrictMode>
);
 