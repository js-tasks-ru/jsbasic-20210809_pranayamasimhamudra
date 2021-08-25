function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let array=[];
  for (let i=0; i < arr.length; i++){
    if ( !isNaN(arr[i])) {
      array.splice(0,0, arr[i]);
    }
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  let result = {
    min: min,
    max: max,
  }
  return result;
}
