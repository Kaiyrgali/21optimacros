import React from 'react';

function Details({ active }) {
  if ( active === null ) {return <div className="Details"></div>}
  const { label, id, parentId } = active;

  return (
    <div className="Details">
      <p className="Details-Item">Label: {label}</p>
      <p className="Details-Item">Id: {id}</p>
      <p className="Details-Item">ParentId: {parentId}</p>
    </div>
  );
}

export default Details;
