import React, { useState } from 'react';
import '../styles/style.css'

export default function Collapse() {
  const [isCollapseVisible, setCollapseVisible] = useState(false);

  const handleCollapseToggle = () => {
    setCollapseVisible((prevVisible) => !prevVisible);
  };


  return (
    <div className="collapse">
      <button
        type="button"
        className="btn info collapse-btn"
        onClick={handleCollapseToggle}
      >
        {isCollapseVisible ? 'Close Collapse' : 'Open Collapse'}
      </button>
      <div
        className={`collapse-content ${isCollapseVisible ? 'show' : ''}`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quos, voluptates voluptate quia quae
        exercitationem quod doloribus quas voluptatibus. Quisquam voluptatum,
        quibusdam, quos, voluptates voluptate quia quae exercitationem quod
        doloribus quas voluptatibus.
      </div>
    </div>
  );
};
