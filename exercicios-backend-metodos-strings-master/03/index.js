function criarUrlAmigavel(texto) {
    const textoLowerCase = texto.toLowerCase();
    
    const urlAmigavel = textoLowerCase.replace(/\s+/g, '-');
    
    return urlAmigavel;
  }
  
  const texto = "Aprenda a programar do zero na Cubos Academy";
  const urlAmigavel = criarUrlAmigavel(texto);
  console.log(urlAmigavel);
