function formatCPF(cpf) {
    if (cpf.length !== 11) {
      return "CPF Inválido";
    }
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  
  function formatCNPJ(cnpj) {
    if (cnpj.length !== 14) {
      return "CNPJ Inválido";
    }
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }
  
  const cpf1 = "12309";
  console.log(formatCPF(cpf1));
  
  const cpf2 = "12345678900";
  console.log(formatCPF(cpf2));
  
  const cnpj1 = "12345678900";
  console.log(formatCNPJ(cnpj1));
  
  const cnpj2 = "12345678000199";
  console.log(formatCNPJ(cnpj2));  
