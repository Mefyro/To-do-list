function filterObject(source, allowedFields = []) {
  const filtered = {};
  for (const key of allowedFields) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      filtered[key] = source[key];
    }
  }
  return filtered;
}

module.exports = filterObject;