import React from 'react';
import './Tooltip.css';

function Tooltip({text1,text2}){
    return <div className='container'>
        <h2 className="tooltiptext">Hover over me
            <div className='tooltip'>{text1}</div>
        </h2>
        <p className="tooltiptext">Hover over me to see another tooltip
            <div className="tooltip" >{text2}</div>
        </p>
    </div>
}

export default Tooltip;