function isNumber(n) { 
return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
}

var wtn = require('./wtn.js')

 module.exports.check = function(input) {
   
   if(isNumber(input) == true) {
     return input % 2 == 0;
   } else if(isNumber(input) == false){
  var cv = wtn(input)
  return cv % 2 == 0;
  }
}

/* examples:
console.log(isEven('one-hundred'))

will return true
console.log(isEven('34587'))
will return false

GoldenFox made this.
*/
