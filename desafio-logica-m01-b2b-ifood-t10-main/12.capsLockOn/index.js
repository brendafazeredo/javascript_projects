function processData(input) {
  let palavraCorrigida = "";

  if (input === input.toUpperCase()) {
    palavraCorrigida = input.toLowerCase();
    console.log(palavraCorrigida);
  } else if (
    input[0] === input[0].toLowerCase() &&
    input.slice(1) === input.slice(1).toUpperCase()
  ) {
    palavraCorrigida += input[0].toUpperCase() + input.slice(1).toLowerCase();
    console.log(palavraCorrigida);
  } else {
    console.log(input);
  };
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
