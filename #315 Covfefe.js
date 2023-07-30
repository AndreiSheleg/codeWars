function covfefe(str){
  let reg = /coverage/g;
  return reg.test(str) ? str.replace(reg, "covfefe") : str += " covfefe";
}
