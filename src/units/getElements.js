export const getElements = (store) => {
  const elements = new Array();
  console.log('Refreshing elements');
  const obj = store.entityLabelPages[0]
  for (let i = 0; i < obj.labels.length; i++) {
    if (obj.labels[i].includes('element')) {
      const current = {
        Label: obj.labels[i],
        Id: obj.entityLongIds[i],
        ParentId: obj.parentEntityLongIds[i],
        // child: [],
      }
      elements.push(current);
      }
    }

  // for (let i = 0; i < elements.length; i++) {
  //   if (elements[i].includes('.')) {
  //     const elements[i].child = 
  //   }
  //   const number = ;
    
  // }
  return elements;
}