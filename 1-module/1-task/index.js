function factorial(n) {
  // ваш код...
  let result=1;
  if (n==0){
    return result;
  } else if (n<0) {
    return result = console.log('Факториал - функция, определенная на множестве неотрицательных чисел');
  }
  else {
    for(n;n>0;n--){
      result *= n;
    }
    return result;
  }
}     
