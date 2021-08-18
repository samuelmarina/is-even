const fs = require("fs");
var until_number = 1e3,
  base_code_start = "function isEven(number){ \n if(number == 1) return false;",
  base_code_end = "}",
  xd = [];
for (let e = 0; e < until_number; e++)
  if (!(e < 2)) {
    var progress = `else if(number == ${e}) return ${!(e % 2)}`;
    xd.push(progress);
    var code = base_code_start + "\n" + xd.join("\n") + base_code_end;
    fs.writeFile("index.js", code, function (e) {
      if (e) throw e;
      console.log("Just added another number in ur shitty code");
    });
  }
