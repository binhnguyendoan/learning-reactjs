import React, { useState } from 'react';
import "./ToggleStyle.css";
const Toggle = () => {
    const [on, setOn] = useState(false);
    const handleToggle = () => {
        setOn((on) => !on);
    }
    return (
        // <div className='toggle' onClick={() => setOn(true)}>
        //     Toggle {on ? 'On' : 'Off'}
        // </div>
        <div>
            <h2>Thực hành UseState</h2>
            <div className={`toggle ${on ? "active" : ''}`} onClick={handleToggle}>
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
        </div>
    );
};

export default Toggle;