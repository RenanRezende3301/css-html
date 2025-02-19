// Esse código é executado assim que o conteúdo da página estiver carregado
document.addEventListener("DOMContentLoaded", function () {

    // Captura o envio do formulário
    document.getElementById("myform").addEventListener("submit", function (event) {
        
        // Impede o comportamento padrão do formulário (não recarregar a página)
        event.preventDefault();

        // Obtém os valores digitados nos campos de nome e sobrenome
        let nome = document.getElementById("iname").value;
        let sobrenome = document.getElementById("ilastname").value;
        
        // Cria a mensagem personalizada usando os valores capturados
        let mensagem = `Olá, ${nome} ${sobrenome}!`;

        // Exibe a mensagem no elemento com id="result"
        document.getElementById("result").innerText = mensagem;
    });
})