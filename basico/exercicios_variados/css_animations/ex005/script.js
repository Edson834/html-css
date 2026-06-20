let messages = document.getElementById("messages");
let button = document.getElementsByTagName("button")[0];
let campo = document.getElementById("name");
let corpo = document.getElementsByTagName("body")[0];

corpo.onload = greetings;


button.addEventListener("click", function() {
    let message = document.createElement("div");
    
    if (campo.value === "") {
        message.style.backgroundColor = "rgba(255, 69, 69, 0.603)";
        message.style.borderColor = "red";
        message.innerHTML = "Precisas Digitar o teu nome primeiro!";
    }else {
        message.innerHTML = `Prazer em conhecer-te! ${campo.value}, Seja Bem-Vindo!`;

    }

        message.classList.add("message");
        messages.appendChild(message);
        message.style.display = "block";
        message.classList.add("slideDown");

    setTimeout(function() {
        message.style.display = "none";
        message.classList.remove("slideDown");
    }, 5000);

    delete message;

});

function greetings() {
    let message = document.createElement("div");
    message.style.backgroundColor = "rgba(69, 255, 69, 0.603)";
    message.style.borderColor = "green";
    message.innerHTML = "Olá! Digite o teu nome e clique no botão para receber uma mensagem personalizada!";
    message.classList.add("message");
    messages.appendChild(message);
    message.style.display = "block";
    message.classList.add("slideDown");

    setTimeout(function() {
        message.style.display = "none";
        message.classList.remove("slideDown");
    }, 5000);
};

