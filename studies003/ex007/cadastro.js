document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("myform").addEventListener("submit", function (event) {
        
        event.preventDefault();

        let email = document.getElementById("iemail").value;
        let password = document.getElementById("ipassword").value;
        
        let mensagem = `Your login is, Email:${email} --- Password:${password}!`;

        document.getElementById("result").innerText = mensagem;
    });
})