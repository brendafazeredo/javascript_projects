function formatarNumeroCartao(numeroCartao) {
    if (typeof numeroCartao !== 'string' || numeroCartao.length !== 16) {
      return 'Número de cartão inválido';
    }
  
    const numerosVisiveis = numeroCartao.slice(0, 4);
    const numerosOcultos = '*'.repeat(8);
    const numerosFinais = numeroCartao.slice(12);
  
    return `${numerosVisiveis}${numerosOcultos}${numerosFinais}`;
  }
  
  const numeroCartao1 = '1111222233334444';
  const numeroFormatado1 = formatarNumeroCartao(numeroCartao1);
  console.log(numeroFormatado1);
