import React, { useState } from "react";
import "./TemperatureController.css";

const TemperatureController = (props) => {
    const [temperature, setTemperature] = useState(10);
    const increase = () => {
        setTemperature((temp) => ++temp);
    }
    const decrease = () => {
        setTemperature((temp) => --temp);
    }
    const getColorClass = () => {
        if (temperature <= 0) {
            return "blue";
        } else if (temperature <= 15) {
            return "green"
        } else {
            return "red"
        }
    }
    return (
        <div className="temp-controller">
            <h1 className={`disp-temp ${getColorClass()}`}>{temperature}<sup>o</sup>C</h1>
            <span className="buttons"><button type="button" onClick={increase}>+</button>
            <button type="button" onClick={decrease}>-</button></span>
        </div>
    )
}

export default TemperatureController;