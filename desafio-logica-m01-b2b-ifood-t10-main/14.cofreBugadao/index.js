function processData(input) {
  const [senha, tentativa] = input.trim().split("\n");
  let senhaIndex = 0;
  let resultado = "";

  for (let i = 0; i < tentativa.length; i++) {
    if (tentativa[i] === senha[senhaIndex]) {
      resultado += tentativa[i];
      senhaIndex++;
    };

    if (senhaIndex === senha.length) {
      break;
    };
  };

  if (resultado === senha) {
    console.log('SIM');
  } else {
    console.log('NAO');
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
