import React, { useState,useContext } from "react";
import "./Sorts.scss";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Icon from "@mdi/react";
import SortByPrice from './SortByPrice/SortByPrice'
import SortByNumber from './SortByPrice/SortByNumber'
import DropDown from "../../../../UI/DropDown";
import { ProductsContext } from "../../../../Contexts/AllContexts/ProductContext";

import { mdiRestore, mdiMenuDown, mdiViewList, mdiViewColumn } from "@mdi/js";
export default function Sorts(props) {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortShowOpen, setSortShowOpen] = useState(false);
    const { ProductPrePage  } = useContext(ProductsContext);
  const [productPerPage, setProductPerPage] = ProductPrePage;
  const openFunc = () => {
    setSortOpen(!sortOpen);
  };
  const closeFunc = () => {
    setSortOpen(false);
  };

  const openSortShowFunc = () => {
    setSortShowOpen(!sortShowOpen);
  };
  const closeSortShowFunc = () => {
    setSortShowOpen(false);
  };

  return (
    <div className='sorts'>
      <div className='sorts__filter'>
        <h5>Sorts</h5>
      </div>
      <div className='sorts__reset'>
        <Icon path={mdiRestore} title='Reload' size={1} />
      </div>
      <div className='sorts__sort' onClick={openFunc} onMouseLeave={closeFunc}>
        <div className='sort__content'>
          <div className='sorts__content-left'>
            <span>SORT BY: Price</span>
          </div>
          <div className='sorts__content-Right'>
            <Icon path={mdiMenuDown} title='Reload' size={0.6} />
          </div>
        </div>
        {sortOpen ? <DropDown>
          <SortByPrice />
        </DropDown> : null}
      </div>
      <div className='sorts__show' onClick={openSortShowFunc} onMouseLeave={closeSortShowFunc}>
        <div className='sort__content'>
          <div className='sorts__show-left'>
            <span>SHOW: {productPerPage}</span>
          </div>
          <div className='sorts__show-Right'>
            <Icon path={mdiMenuDown} title='Reload' size={0.6} />
          </div>
        </div>
        {sortShowOpen ? <DropDown>
          <SortByNumber />
        </DropDown>: null}
      </div>
      <div className='sorts__row'>
        <Icon path={mdiViewColumn} title='Reload' size={1} />
      </div>
      <div className='sorts__column' >
        <Icon path={mdiViewList} title='Reload' size={1} />
      </div>
      <div className='sorts__compare'>
        <span>
          COMPARE : <Badge badgeContent={3} color='primary' />
        </span>
      </div>
    </div>
  );
}
