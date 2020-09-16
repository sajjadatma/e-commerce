import React, { useState } from "react";
import "./ExpansionPanel.scss";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";
export default function ExpansionPanel(props) {
  const [minimize, setMinimize] = useState(false);
  const minimizeFunc = () => {
    setMinimize(!minimize);
  };
  
  const minimizeItem = minimize
    ? {backgroundColor: `#${props.background}`}
    : {backgroundColor: `#${props.background}`};
  const Icons = minimize
    ? { transform: "rotate(0)", transition: "all 0.5s" }
    : { transform: "rotate(-180deg)", transition: "all 0.5s" };

  return (
    // ExpansionPanel
    <div className={minimize ? 'ExpansionPanel minimizeItem': 'ExpansionPanel maxizeItem'} style={minimizeItem}>
      <div className='ExpansionPanel__headers' onClick={minimizeFunc}>
        <Icon style={Icons} path={mdiMenuDown} title='down' size={0.6} />
        <h6>{props.title}</h6>
      </div>
      {!minimize ? props.children : null}
    </div>
  );
}
