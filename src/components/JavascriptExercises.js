import React, { useState } from "react";
import "./JavascriptExercises.css";

const JavascriptExercises = (props) => {
    const [ex1, setEx1] = useState({ num: 0, result: null });


    return (
        <div className="ex1">
            <h1>Find even and odd numbers</h1>
            <div className="content">
                <input type="number" value={ex1.num} onChange={(evt) => {
                    setEx1({
                        num: evt.currentTarget.value,
                        result: null
                    });
                }} />
                <button type="button" disabled={!ex1.num} onClick={() => {
                    let result = "";
                    if (ex1.num) {
                        if (ex1.num % 2 === 0) {
                            result = "Its an even number";
                        } else {
                            result = "Its an odd number";
                        }
                    }
                    setEx1({
                        ...ex1,
                        result
                    })

                }}>Find Even / Odd</button>
                <span>Result: {ex1.result}</span>
            </div>
        </div>
    )
}

export default JavascriptExercises;
