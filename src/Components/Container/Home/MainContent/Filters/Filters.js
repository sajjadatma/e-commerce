import React,{useContext,useState} from "react";
import "./Filters.scss";
import ExpansionPanel from "../../../../../UI/ExpansionPanel";
import Price from "./Price/Price";
import Categories from "./Categories/Categories";
import Colors from "./Colors/Colors";

export default function Filters() {
  

  return (
    <div className='filters'>
      <ExpansionPanel  title='Category'>
        <Categories />
      </ExpansionPanel>
      <ExpansionPanel  background={"f2f2f2"} title='Price'>
        <Price/>
      </ExpansionPanel>
      <ExpansionPanel  title='Colors'>
        <Colors />
      </ExpansionPanel>
    </div>
  );
}
