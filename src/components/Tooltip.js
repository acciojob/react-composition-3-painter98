import React,{useState} from 'react';
/*import './Tooltip.css';*/

function Tooltip(props){
    /*return <div className='container'>
        <h2 className="tooltip">Hover over me
            <div className='tooltiptext'>{text1}</div>
        </h2>
        <p className="tooltip">Hover over me to see another tooltip
            <div className="tooltiptext" >{text2}</div>
        </p>
    </div>*/
    let [showTooltip,setShowTooltip] = useState(true);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {props.children}
      {showTooltip && <div className="tooltiptext">{props.text}</div>}
    </div>
  );
};

export default Tooltip;