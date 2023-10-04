function capturarCarros(arrayCarros, posicao) {
    if (posicao >= 0 && posicao <= arrayCarros.length - 3) {
      const carrosCapturados = arrayCarros.slice(posicao, posicao + 3);
      console.log(carrosCapturados.join(' - '));
    } else {
      console.log("Posição inválida para capturar carros.");
    }
  }
  
  const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
  const posicao = 3;
  
  capturarCarros(nomes, posicao);
