import React, {useState} from 'react';
import './MenuItem.css';


function MenuItem({ label, changeActiveLabel }) {
  // const {selected, setSelected} = useState ('')
  const style = `Menu-Item Menu-Item_level${label.level}`;

  return (
    <div
      className={style}
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
