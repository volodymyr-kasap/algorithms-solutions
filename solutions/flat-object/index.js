const flatObjectKeys = (obj) => {
  const keys = [];

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      keys.push(key);
      keys.push(...flatObjectKeys(value));
    } else {
      keys.push(key);
    }
  }

  return keys;
}

module.exports = {
  flatObjectKeys,
}
