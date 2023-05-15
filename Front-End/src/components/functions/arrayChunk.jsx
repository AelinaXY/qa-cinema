function arrayChunk(array,chunkSize) {

  const returnArray = [];
  
  for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      returnArray.push(chunk);
  }
  return returnArray;
  }


export default arrayChunk;