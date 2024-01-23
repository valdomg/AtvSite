//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

//Validação de Login

function login(){
    var log  = false;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario = "admin" && senha == "123456") {
        window.location = "index.html";
        log = true; 
    }

    if (!log){
        alert("Acesso negado, dados incorretos!");
    }
}


//Ativar alert no botão cadastrar
