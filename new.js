function isEven(x){
  if(x < 0)
    return Boolean(-(x % 2));
  else
    return Boolean(x % 2);
}
