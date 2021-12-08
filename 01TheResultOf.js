"use strict";

const theResultOf = function (exp) {
  console.log(`The type of ${exp} is ${typeof exp}`);
};

theResultOf("" + 1 + 0), console.log('String"10"');
theResultOf("" - 1 + 0), console.log("Number");
theResultOf(true + false), console.log("Number(1)");
theResultOf(6 / "3"), console.log("Number(2)");
theResultOf("2" * "3"), console.log("Number(6)");
theResultOf(4 + 5 + "px"), console.log("String(9px)");
theResultOf("$" + 4 + 5), console.log("String($45)");
theResultOf("4" - 2), console.log("Number(2)");
theResultOf("4px" - 2), console.log("Nan");
theResultOf(7 / 0); //
theResultOf(" -9" + 5), console.log("String (-95)");
theResultOf(" -9 " - 5), console.log("Number (-14)");
theResultOf(null + 1), console.log("Number(1)");
theResultOf(undefined + 1), console.log(" Nan");
