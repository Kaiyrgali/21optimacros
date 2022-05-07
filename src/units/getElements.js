export const getElements = (store) => {
  const elements = new Array();
  console.log('Refreshing elements');
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