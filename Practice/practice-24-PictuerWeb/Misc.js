function padLeft(str, len){
  if (str.length >= len) {
    return str;
  } else {
    return padLeft("0" +str,len);
  }
}
