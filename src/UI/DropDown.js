import React from "react";
import './DropDown.scss'
export default function DropDown(props) {    
    return (
        <div className="dropdown">
            <div className="dropdown_content">
           {props.children}
            </div>
        </div>
    )
}
