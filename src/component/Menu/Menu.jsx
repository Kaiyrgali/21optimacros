import React, { useState } from 'react';
// import './Menu.css';
import { store } from '../../service/getJson';

console.log('Menu store >', store.entityLabelPages);
console.log('Menu store labels >', store.entityLabelPages[0].labels);

const getElements = () => {
  const elements = new Array();
  const array = store.entityLabelPages[0].labels
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    if (array[i].includes('element')) {
      const current = {
        label: array[i],
        Id: store.entityLabelPages[0].entityLongIds[i],
        ParentId: store.entityLabelPages[0].parentEntityLongIds[i],
      }
      elements.push(current);
      }
    }
  return elements;
}

function Menu() {
  const [elem, setElem] = useState(getElements);
  console.log('Initial elem >', elem);

  return (
    <div className="Menu">
      {/* {store.entityLabelPages} */}
    </div>
  );
}

export default Menu
