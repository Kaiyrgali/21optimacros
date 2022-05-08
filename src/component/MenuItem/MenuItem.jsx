import React, {useState} from 'react';
import './MenuItem.css';


function MenuItem({
  label,
  changeActiveLabel,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
 }) {
  const style = `Menu-Item Menu-Item_level${label.level}`;

  

  return (
    <div
      className={style}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, label)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, label)}
      onClick={()=>{
        // setSelected('Menu-Item_selected')
        changeActiveLabel(label)
      }}
    >
      {label.label}
    </div>
  );
}

export default MenuItem
