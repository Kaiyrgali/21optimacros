import React, { useState, useRef, useMemo } from 'react';
// import './Menu.css';
import { store } from '../../service/getJson';
import { getElements} from '../../units/getElements';
import Item from './Item';

const getLevel = (item) => {
  return item.split(".").length
  if (!item.includes('.')) {
    return '1'
  } 
  return '2'
}

function Menu() {
  const [refresh, setRefresh] = useState(false);
  const [renderCount, setRenderCount] = useState(1);
  const elem = useMemo(()=> {
    return getElements(store)
  }, [refresh]);
  console.log('elem >', elem);


  return (
    <div className="Menu">
      {elem.map((item, i)=> 
        <Item
          key={i}
          label={item}
          level={item.Label.split(".").length}
        />
      )}
      <button onClick={
        ()=>setRenderCount(prev=>prev+1)
      }>Render {renderCount}</button>
      <button onClick={
        ()=>setRefresh(prev=>!prev)
      }>Refresh {refresh}</button>
      {/* {store.entityLabelPages} */}
    </div>
  );
}

export default Menu
