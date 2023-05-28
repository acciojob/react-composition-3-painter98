
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip.js';

const App = () => {
  /*let text1 = 'This is a tooltip';
  let text2 = 'This is another tooltip';*/

  return (
    <div>
        {/* Do not remove the main div <Tooltip text1={text1} text2={text2}/>*/}
      <h2 className="tooltiptext">
        <Tooltip text="This is a tooltip">Hover over me</Tooltip>
      </h2>
      <p className="tooltiptext">
        <Tooltip text="This is another tooltip">
          Hover over me to see another tooltip
        </Tooltip>
      </p>
    </div>
  )
}

export default App
