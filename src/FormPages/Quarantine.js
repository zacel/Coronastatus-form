import React from 'react';

function Quarantine(props) {

  return (
    <div className="FormPage">
      Quarantine Page 
      <button onClick={() => props.nextPage()}>{window.i86n['Next']}</button>
    </div>
  );
}

export default Quarantine;
