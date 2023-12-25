import React, { useState } from "react";
import "../styles/style.css";

export default function DrawerLeft() {
  const [active, setActive] = useState(false)
  
  const handleActive = () => setActive(!active)

  return (
    <>
      <button onClick={handleActive} type="button" className="btn info btn-drawer">Click Me</button>
      <div className={`drawer left ${active && 'active'}`}>
        <div className="drawer-backdrop" onClick={handleActive}></div>
        <div className="drawer-content">
          <div className="drawer-top">
            <div>Drawer</div>
            <button type="button" className="btn-close" onClick={handleActive}>X</button>
          </div>
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
        </div>
      </div>
    </>
  );
}
