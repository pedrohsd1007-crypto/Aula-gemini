document.getElementById('vagaForm').addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    //comentário
    event.preventDefault();

    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const resultadoDiv = document.getElementById('resultado');

    // Limpa classes anteriores de resultado
    resultadoDiv.className = 'resultado';

    // Regra de negócio: Altura >= 1.70 E Idade >= 18
    if (altura >= 1.70 && idade >= 18) {
        resultadoDiv.textContent = `Olá, ${nome}. Parabéns! Você pode prosseguir no processo para a vaga!`;
        resultadoDiv.classList.add('sucesso');
    } else {
        resultadoDiv.textContent = `Olá, ${nome}. Infelizmente você não é apto à vaga.`;
        resultadoDiv.classList.add('erro');
    }
});