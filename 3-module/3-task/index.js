function camelize(str) {
  // ваш код...
  let arr = str.split('-');
  for (let i=1;i<arr.length;i++){
    arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
  }
  let str1 = arr.join('');
  return str1;
} 
