function validateFields(){
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid && !passwordValid;
}

function isPasswordValid(){
    const password = document.getElementById("password").value;
    if(!password){
        return false;
    }

    return true;
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function login(){
    window.location
}

const botao = document.querySelector(".dropbutton");
const elementoPlataformas = document.querySelector(".dropbutton .options-drop");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
