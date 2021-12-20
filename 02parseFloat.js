"use strict";

function myParseFLoat(str) {
  if (typeof Number(str[0]) !== "number" || isNaN(str[0])) {
    return NaN;
  }
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (typeof Number(str[i]) === "number" && !isNaN(str[i])) {
      str1 += str[i];
    } else {
      if (str[i] === "." && typeof Number(str[i + 1]) === "number") {
        str1 += str[i];
      } else return Number(str1);
    }
  }
  return Number(str1);
}
console.log(myParseFLoat("69.420"));
