String.prototype.toAlternatingCase = function () {
let resultStr = '';
  for(let i = 0; i< this.length; i++){
    if (this[i] == this[i].toLowerCase()){ 
      resultStr += this[i].toUpperCase();
    } else {
      resultStr += this[i].toLowerCase();
    }
  }
  return resultStr;
}
