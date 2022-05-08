import React, {useState} from 'react';
import './Item.css';


function Item({ label, level, changeActiveLabel }) {
  const style = `Menu-Item Menu-Item_level${level}`;

  return (
    
    <div
      className={style}
      onClick={()=>changeActiveLabel(label)}
    >
        {label.Label}
    </div>
  );
}

export default Item
