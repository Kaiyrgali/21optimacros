import React, { useState, useRef, useMemo } from 'react';
import './Main.css';
import { store } from '../../service/getJson';
import { getElements} from '../../units/getElements';
import MenuItem from '../MenuItem';
import Details from '../Details';

function Main() {
  const [refresh, setRefresh] = useState(false);
  const [renderCount, setRenderCount] = useState(1);
  const [active, setActive] = useState(null);

  const elem = useMemo(()=> {
    return getElements(store)
  }, [refresh]);
  const [currentElem, setElem] = useState(elem);

  console.log('elem >', elem);
  console.log('currentElem >', currentElem)
  console.log('active >', active);

  const changeActiveLabel =(item) => {
    setActive(item);
  }

  const removeElement = () => {
    if (!active) {return}
    const indexActive = currentElem.indexOf(active);
    const nextElem = currentElem.slice(indexActive+1);
    const isLast = indexActive === currentElem.length-1;
    const next = nextElem.findIndex(el => el.level+1 === active.level+1) + 1;
    const indexNext = active.level === 3 || isLast
      ? 1 
      : next === 0 ? 100 : next;
    // // forEach((element, indexOf(active.level, indexActive);
    // console.log('current before delete>', currentElem);
    // console.log('Try remove >', indexActive, active.level, next);
    currentElem.splice(indexActive,indexNext)
    setElem( prev => prev.slice());
    setActive(null);
  }

  return (
    <div className="Main">
      <div className="Container">
        <div className="Menu">
          {currentElem.map((item, i)=> 
            <MenuItem
              key={i}
              label={item}
              changeActiveLabel={changeActiveLabel}
            />
          )}
        </div>

        <Details active={active} />
      </div>

      <div className='Buttons'>
        <button onClick={()=>removeElement()}>
          Remove
        </button>
        <button onClick={()=>setRenderCount(prev=>prev+1)}>
          Render {renderCount}
        </button>
        <button onClick={()=>{
          setRefresh(prev=>!prev);
          setElem(elem);
        }}>
          Refresh {refresh}
        </button>
      </div>

    </div>
  );
}

export default Main
