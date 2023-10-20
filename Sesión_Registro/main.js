const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

const nombreInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contraseñaInput = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (nombreInput.value.length < 6) {
        warnings += 'El nombre debe tener al menos 6 caracteres.<br>';
        entrar = true;
    }

    if (!regexEmail.test(emailInput.value)) {
        warnings += 'El email no es válido.<br>';
        entrar = true;
    }

    if (contraseñaInput.value.length < 8) {
        warnings += 'La contraseña debe tener al menos 8 caracteres.<br>';
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "";
        form.submit();
    }
});


document.getElementById("form").addEventListener("submit", e=>{
    e.preventDefault();
})
function login(){
    if(document.getElementById("username").value === "Luis" && document.getElementById("pass").value === "12345678"){
        window.location.href = "/Principal/principal.html"
    }
}

