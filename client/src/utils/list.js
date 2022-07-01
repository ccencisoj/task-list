const list = (array)=> {
  const add = (item)=> {
    return [...array, item];
  }

  const deleteById = (itemId)=> {
    return array.filter((item)=> !(item.id === itemId));
  }

  const updateById = (itemId, values)=> {
    return array.map((item)=> item.id === itemId ? ({...item, ...values}) : item);
  }

  return {add, deleteById, updateById};
}

export default list;