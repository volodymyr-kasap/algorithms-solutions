const arr = [1,2,3,4,5,6,7,8,9];

const findKMax = (arr, k) =>{
  let result;
  arr.sort((a, b) => b - a);
  result = arr.splice(0, k);

  return result;
}

console.log(findKMax(arr, 4));
