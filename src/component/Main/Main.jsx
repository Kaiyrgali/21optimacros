import React, { useState, useEffect } from 'react';
import './Main.css';
import { getElements } from '../../units/getElements';
import MenuItem from '../MenuItem';
import Details from '../Details';

const  _apiBase = 'https://gist.githubusercontent.com/avydashenko/e1702c1ef26cddd006da989aa47d4f62/raw/633c9211d1a1816d8286368d9ff9717f343c508a/view.json';

const getTree = () => {
  const tree = document.querySelectorAll('html');
  for (let elem of tree) {
    console.log(elem)
  };
}

function Main() {
  const [refresh, setRefresh] = useState(false);
  const [active, setActive] = useState(null);
  const [list, setList] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch(_apiBase)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const elem = getElements(data)
        setList(elem)
      })
  }, [refresh]);

  const changeActiveLabel =(item) => {
    setActive(item);
  }

  const removeElement = () => {
    if (!active) {return}
    const indexActive = list.indexOf(active);
    const nextElem = list.slice(indexActive+1);
    const isLast = indexActive === list.length-1;
    const next = nextElem.findIndex(el => el.level+1 === active.level+1) + 1;
    const indexNext = active.level === 3 || isLast
      ? 1 
      : next === 0 ? 100 : next;
    list.splice(indexActive,indexNext)
    setList(prev => prev.slice());
    setActive(null);
  }

  const dragStartHandler = (e, label) => {
    const index = list.indexOf(label);
    setStartIndex(index);
  }
  const dragEndHandler = (e) => {
    e.target.style.background = 'white';
  }
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }
  const dropHandler = (e, label) => {
    e.target.style.background = 'white';
    e.preventDefault();
    const dropIndex = list.indexOf(label);
    const newList = list.slice(0,dropIndex).concat(list[startIndex],list.slice(dropIndex,startIndex), list.slice(startIndex+1));
    setList(newList);
  }
  
  if (list === null) {return <div className="Main">Loading...</div>}

  return (
    <div className="Main">
      <div className="Container">
        <div className="Menu">
          {list.map((item, i)=> 
            <MenuItem
              key={i}
              label={item}
              changeActiveLabel={changeActiveLabel}
              dragStartHandler={dragStartHandler}
              dragEndHandler={dragEndHandler}
              dragOverHandler={dragOverHandler}
              dropHandler={dropHandler}
            />
          )}
        </div>

        <Details active={active} />
      </div>

      <div className='Buttons'>
        <button onClick={()=>removeElement()}>
          Remove
        </button>
        <button onClick={()=>{
          setRefresh(prev=>!prev);
        }}>
          Refresh {refresh}
        </button>
        <button onClick={()=>getTree()}>
          Apply
        </button>
      </div>

    </div>
  );
}

export default Main
