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

function Login(){
    const loginemail = document.getElementById("email").value;
    
    if(loginemail === "funcionario@gmail.com"){
        window.location.href = "../Funcionario/homefuncionario.html";
    }

    if(loginemail === "recepcionista@gmail.com"){
        window.location.href = "../Recepcionista/homerecepcionista.html";
    }

    if(loginemail === "cliente@gmail.com"){
        window.location.href = "../Cliente/homecliente.html";
    }

    if(loginemail !== "cliente@gmail.com" && loginemail !== "recepcionista@gmail.com" && loginemail !== "funcionario@gmail.com"){
        alert("Essa conta é inexistente!");
    }
}

function Cadastrar(){
    alert("Conta criada com êxito.");
}
