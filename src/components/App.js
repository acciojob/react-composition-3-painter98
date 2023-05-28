
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip.js';

const App = () => {
  let text1 = 'This is a tooltip';
  let text2 = 'This is another tooltip';

  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text1={text1} text2={text2}/>
        
    </div>
  )
}

export default App
