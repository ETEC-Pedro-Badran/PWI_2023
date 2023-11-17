var form = document.getElementById("formulario");

form.addEventListener('submit',(event)=>{
    

    let emailElement = document.getElementById("email");
    let senhaElement = document.getElementById("senha");
    let validou = true;
    if (!emailElement.value.includes("@")) {
        validou = false;
        alert("Email inválido!");
    }


    if (emailElement.value!="evaldo@etec.com.br" ||
        senhaElement.value!="123456"
    ) {
        validou = false;
        alert("Email/senha inválido!");
    }


    if (!validou) {
        event.preventDefault();
    }


   
});
