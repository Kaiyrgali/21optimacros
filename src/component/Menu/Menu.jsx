import React, { useState, useRef, useMemo } from 'react';
// import './Menu.css';
import { store } from '../../service/getJson';
import { getElements} from '../../units/getElements';

console.log('Menu store >', store.entityLabelPages);
console.log('Menu store labels >', store.entityLabelPages[0].labels);



function Menu() {
  const [refresh, setRefresh] = useState(false);
  const [renderCount, setRenderCount] = useState(1);
  const elem = useMemo(()=> {
    return getElements(store)
  }, [refresh]);
  console.log('elem >', elem);


  return (
    <div className="Menu">
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
