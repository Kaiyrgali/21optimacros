import React, { useState, useRef, useMemo } from 'react';
import './Menu.css';
import { store } from '../../service/getJson';
import { getElements} from '../../units/getElements';
import Item from './Item';
import Details from '../Details';

function Menu() {
  const [refresh, setRefresh] = useState(false);
  const [renderCount, setRenderCount] = useState(1);
  const [active, setActive] = useState(null);

  const elem = useMemo(()=> {
    return getElements(store)
  }, [refresh]);
  console.log('elem >', elem);
  console.log('active >', active);

  const changeActiveLabel =(item) => {
    setActive(item);
  }


  return (
    <div className="Main">
      <div className="Layout">
        <div className="Menu">
          {elem.map((item, i)=> 
            <Item
              key={i}
              label={item}
              level={item.label.split(".").length}
              changeActiveLabel={changeActiveLabel}
            />
          )}
        </div>

        <div className="Details">
          <Details active={active} />
        </div>
      </div>

      <button onClick={
        ()=>setRenderCount(prev=>prev+1)
      }>Render {renderCount}</button>
      <button onClick={
        ()=>setRefresh(prev=>!prev)
      }>Refresh {refresh}</button>
    </div>
  );
}

export default Menu
