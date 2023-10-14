export const renameAllKeys = (obj, prefix) => {
  const renamedObject = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = `${key}${prefix}`;
      renamedObject[newKey] = obj[key];
    }
  }

  return renamedObject;
};
