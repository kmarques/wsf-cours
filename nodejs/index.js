function capitalize (str) {
    return str.split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() 
        + word.substring(1).toLowerCase();
      })
      .join(" ");
}

console.log("Capitalize");
console.log(capitalize("test"));
console.log(capitalize(" test"));
console.log(capitalize("ipsum DOLOR"));
console.log(capitalize("sit 8met consectetur"));
console.log(capitalize("_dipiscing elit"));

function camelCase(string) {
  return capitalize(string).replace(/[^a-zA-Z0-9]+/g, "");
}
console.log("CamelCase");
console.log(camelCase("toggle case is the coolest"));

function snake_case(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
  // Equivalent utilisant l'object RegExp
  return str.replace(new RegExp('[^a-zA-Z0-9]+', 'g'), "-").toLowerCase();
}
console.log(snake_case("Heelo, world foo"));

function leet(str) {
  return str
    .replace(/a/gi, "4")
    .replace(/E/gi, "3")
    .replace(/[iI]/g, "1")
    .replace(/O/gi, "0")
    .replace(/U/gi, "(_)")
    .replace(/Y/gi, "7");

    // Version optimisée
    return str.replace(/[aeiou]/ig, function(item) {
      switch(item) {
          case 'a':
          case 'A':
              return 4;
          case 'e':
          case 'E':
              return 3;
          case 'i':
          case 'I':
              return 1;
          case 'o':
          case 'O':
              return 0;
          case 'u':
          case 'U':
              return '(_)';
      }
  });
}
console.log(leet('AnaCOnDA'));

function yoda(str) {
  return str.split(' ').reverse().join(" ");
}
console.log(yoda('Hello World John'));