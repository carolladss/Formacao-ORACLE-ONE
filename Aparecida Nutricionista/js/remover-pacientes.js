var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   
    event.target.parentNode.classList.add("fadeOut"); // aplica o fade out na linha
    setTimeout(function(){ //"pede" para o JS esperar um pocuo, nesse caso vai esperar 500ms ou 0.5s
        event.target.parentNode.remove();
    }, 500);
});
    
   
    /* OU
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR(a linha) -> remover

    paiDoAlvo.remove();*/

/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){ //escuta evento de duplo clique
        console.log("Fui clicado duplamente!");
        this.remove();
    }); 
});*/