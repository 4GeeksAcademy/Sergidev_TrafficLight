import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [isAuto, setIsAuto] = useState(false);

    const changeLight = (changeColor) => {
        setColor(changeColor);
    };

    const getNextColor = (currentColor) => {
        if (currentColor === "green") return "amber";
        else if (currentColor === "amber") return "red";
        else if (currentColor === "red") return "purple";
        else return "green";
    };

    const handleAutomaticMode = () => {
        if (isAuto) {
            setIsAuto(false);
            const highestTimeoutId = setInterval(() => { }, 1000);

            for (let i = 0; i <= highestTimeoutId; i++)
                clearInterval(i);

        }
        else {
            setIsAuto(true);

            const intervalId = setInterval(() => {
                setColor((prevColor) => {
                    if (document.getElementById("auto-btn")?.getAttribute("data-auto") === "false") {
                        clearInterval(intervalId);
                        return prevColor;
                    }
                    return getNextColor(prevColor);
                });
            }, 3000);
        }
    };

    return (

        <>
            <div className="traffic-light-container d-flex flex-column gap-3 p-3 rounded-4 shadow-lg">
                <button onClick={() => changeLight("red")} className={`traffic-light-button red ${color === "red" ? "active" : ""}`}></button>

                <button onClick={() => changeLight("amber")} className={`traffic-light-button amber ${color === "amber" ? "active" : ""}`}></button>

                <button onClick={() => changeLight("green")} className={`traffic-light-button green ${color === "green" ? "active" : ""}`}></button>

                <button onClick={() => changeLight("purple")} className={`traffic-light-button purple ${color === "purple" ? "active" : ""}`}></button>
            </div>

            <button id="auto-btn" data-auto={isAuto} onClick={handleAutomaticMode} className={`btn ${isAuto ? "btn-danger" : "btn-primary"} fw-bold shadow px-4 py-2`}>
            {isAuto ? "Stop Auto Mode" : "Auto"}</button>
        </>
    );
};

export default TrafficLight;