String.prototype.capitalize = function () {
  return this.split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() 
      + word.substring(1).toLowerCase();
    })
    .join(" ");
}

console.log("Hello World".toLowerCase().capitalize())

Number.prototype.round = function(precision) {
  return parseFloat(this.toFixed(precision));
}

console.log(3.567.round(2));

Number.prototype.trunc = function() {
  return parseInt(this);
  //return parseFloat(this.toPrecision(1));
}