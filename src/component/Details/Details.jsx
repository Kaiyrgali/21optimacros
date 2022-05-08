import React, { useState } from 'react';
// import './Details.css';
// import getData from '../../service/getData';

function Details({ active }) {
  
  console.log('Details active >', active);

  if ( active===null ) {return <div className="Details"></div>}
  const { label, id, parentId } = active;

  // console.log('Details label >', label);

  return (
    <div className="Details">
      <p className="Details-Item">Label: {label}</p>
      <p className="Details-Item">Id: {id}</p>
      <p className="Details-Item">ParentId: {parentId}</p>
    </div>
  );
}

export default Details;
