export const getElements = (store) => {
  const elements = [];
  console.log('Refreshing elements');
  const obj = store.entityLabelPages[0];
  for (let i = 0; i < obj.labels.length; i++) {
    if (obj.labels[i].includes('element')) {
      const current = {
        label: obj.labels[i],
        id: obj.entityLongIds[i],
        parentId: obj.parentEntityLongIds[i],
        level: obj.labels[i].split('.').length,
      };
      elements.push(current);
    }
  }

  return elements;
};
