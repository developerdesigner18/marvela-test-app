export function findEmptyFields(obj) {
  const emptyFields = [];

  for (let key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] === "" || obj[key] === null || obj[key] === undefined)
    ) {
      emptyFields.push(key);
    }
  }

  return emptyFields;
}
