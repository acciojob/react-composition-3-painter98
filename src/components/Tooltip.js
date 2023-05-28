import React from 'react';
import './Tooltip.css';

function Tooltip({text1,text2}){
    return <div className='container'>
        <h1 className="tooltip">Hover over me</h1>
        <h1 className='tooltiptext' id="tool1">{text1}</h1>
        <p className="tooltip" id="text2">Hover over me to see another tooltip</p>
        <p className="tooltiptext" id="tool2">{text2}</p>
    </div>
}

export default Tooltip;