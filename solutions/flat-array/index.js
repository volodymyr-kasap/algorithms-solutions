function flatArray (arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur)
  }, []);
}

function recursiveFlatArray (arr) {
  return arr.reduce((prev, current) => {
    if (Array.isArray(current)) {
      return [...prev, ...recursiveFlatArray(current)]
    }

    return [...prev, current];
  }, [])
}

function recursiveFlatArray2 (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...recursiveFlatArray2(arr[i]))
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  flatArray,
  recursiveFlatArray,
  recursiveFlatArray2,
}
