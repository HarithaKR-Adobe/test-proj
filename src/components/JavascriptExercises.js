import React, { useState } from "react";
import "./JavascriptExercises.css";

const JavascriptExercises = (props) => {
    const [ex1, setEx1] = useState({ num: 0, result: null });
    const arrInputRef = React.createRef();
    const [flattenedArr, setFlattendedArr] = useState(null);

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
            <h1>Flatten array</h1>
            <div className="content">
                <label>Input Array of arrays</label>
                <input type="text" ref={arrInputRef}/>
                <button type="button" onClick={() => {
                    if (arrInputRef && arrInputRef.current) {
                        try {
                            const arr = JSON.parse(arrInputRef.current.value);
                            setFlattendedArr(arr.flat(Infinity));
                        } catch(err) {
                            setFlattendedArr("Enter a valid array of arrays")
                        }
                    }
                }}>Flatten</button>
                <span>Output: [{flattenedArr.join(", ")}]</span>
            </div>
        </div>
    )
}

export default JavascriptExercises;
