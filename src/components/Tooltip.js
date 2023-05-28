import React from 'react';
import './Tooltip.css';

function Tooltip({text1,text2}){
    return <div className='container'>
        <h2 className="tooltip">Hover over me
            <div className='tooltiptext'>{text1}</div>
        </h2>
        <p className="tooltip">Hover over me to see another tooltip
            <div className="tooltiptext" >{text2}</div>
        </p>
    </div>
}

export default Tooltip;