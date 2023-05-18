function dateParseFromDB(date) {
  let returnString = "";

  //"2023-05-11T17:30:00.000Z"

  returnString += date.slice(11,16) + " on ";

  returnString += date.slice(8,10) + "/" + date.slice(5,7) + "/" + date.slice(0,4);

  return returnString;
  }

export default dateParseFromDB;