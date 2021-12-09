import React from 'react';
import { DangerText } from "./danger-text";
import MyImage from './assets/images/1.jpg';
import "./index.css";

const App = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <DangerText text="Danger" />
            <img src={MyImage} alt="torchlight in the sky" />
        </div>
    )
}

export default App;
