const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmar = document.getElementById('confirmar');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checarInputs();
});

function checarInputs(){
    const emailValue = email.value;
    const senhaValue = senha.value;
    const confirmarValue = confirmar.value;

    if(emailValue === ""){
        setErroFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)){
        setErroFor(email, "Insira um e-mail válido.")
    } else {
        setSucessoFor(email);
    }

    if(senhaValue === ''){
        setErroFor(senha, 'A senha é obrigatória');
    } else if(senhaValue.length < 7) {
        setErroFor(senha, 'A senha precisa ter no mínimo 7 caracteres.');
    } else {
        setSucessoFor(senha);
    }

    if(confirmarValue === ''){
        setErroFor(confirmar, "A confirmação da senha é obrigatória.");
    } else if (confirmarValue !== senhaValue){
        setErroFor(confirmar, "As senhas precisam ser iguais.");
    } else {
        setSucessoFor(confirmar);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control sucesso";
    });

    if (formIsValid) {
        window.location.href = "index.html";
    }

}    
    
function setErroFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = 'form-control erro';
}

function setSucessoFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control sucesso";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
