import React, { useState } from 'react';
// import './Details.css';
// import getData from '../../service/getData';

function Details({ active }) {
  
  console.log('Details active >', active);

  if ( active===null ) {return null}
  const {Label, id, parentId} = active;

  console.log('Details label >', Label);

  return (
    <div className="Details-Text">
      <p className="Details-Item">Label: {Label}</p>
      <p className="Details-Item">Id: {id}</p>
      <p className="Details-Item">ParentId: {parentId}</p>
    </div>
  );
}

export default Details;
