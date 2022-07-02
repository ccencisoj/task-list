const list = (array)=> {
  const add = (item)=> {
    return [item, ...array];
  }

  const deleteById = (itemId)=> {
    return array.filter((item)=> !(item.id === itemId));
  }

  const updateById = (itemId, values)=> {
    return array.map((item)=> item.id === itemId ? ({...item, ...values}) : item);
  }

  const findOneById = (itemId)=> {
    return array.filter((item)=> item.id === itemId)[0];
  }

  return {add, deleteById, updateById, findOneById};
}
  
export default list;