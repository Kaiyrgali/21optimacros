import React from 'react';
import './Item.css';


function Item({ label, level }) {
  const style = `Menu-Item Menu-Item_level${level}`;

  return (
    
    <div className={style}>
        {label.Label}
    </div>
  );
}

export default Item
