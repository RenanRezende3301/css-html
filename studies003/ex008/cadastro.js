document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myform").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let name = document.getElementById("iname").value;
        let birthDate = document.getElementById("idate").value; 

        let birthYear = new Date(birthDate).getFullYear(); 

        let currentYear = new Date().getFullYear(); 

        let age = currentYear - birthYear; 

        let mensagem = `Welcome, ${name}! 🎉\nYou are ${age} years old.`;
        
        document.getElementById("result").innerText = mensagem; 

        // Date does not take into consideration day and month
    });
});
