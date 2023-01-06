const formCadastroCliente = document.querySelector(".col-6");
const nomeCompleto = document.querySelector("#nome");
const atrações = document.querySelector("#atracoes");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
const lotacao = document.querySelector("#lotacao");

let fobs = document.getElementById('observação');
let fatracao_msg = document.getElementById('msg-vld-fatracao');
let fname_msg = document.getElementById('msg-vld-fname');
let fmsg_descricao = document.getElementById('msg-vld-fdescricao');
let fmsg_data = document.getElementById('msg-vld-fdata');
let fmsg_lotacao = document.getElementById('msg-vld-flotacao');

const campos = [nomeCompleto, atrações, descricao, data, lotacao];

campos.forEach((campo, indice) => {
    campo.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 && indice < campos.length - 1) {
            event.preventDefault();
            campos[indice + 1].focus(); //para dar enter sem submeter
        }
    });

    campo.addEventListener("change", () => {
        campo.classList.remove("required"); // para retirar a classe
        observação.style.display = "block";
    });
});

nomeCompleto.onblur = (event) => {
    if (event.target.value.length < 3) {
        fname_msg.textContent = "O nome deve ter, no mínino, 3 letras.";
        fname_msg.style.display = "block";
        nomeCompleto.classList.add("required"); //adicionar classe (com css é interessante)
        event.preventDefault();
    } else {
        fname_msg.style.display = "none"; //faz texto aparece!!!
    }
}

atrações.onblur = (event) => {
    if (event.target.value == '') {
        fatracao_msg.textContent = "Insira um nome.";
        fatracao_msg.style.display = "block";
        observação.style.display = "none";
        atrações.classList.add("required"); //adicionar classe (com css é interessante)
        event.preventDefault();
    } else {
        fatracao_msg.style.display = "none"; //faz texto aparece!!!
    }
}


descricao.onblur = (event) => {
    if (event.target.value == '') {
        fmsg_descricao.textContent = "Insira uma descrição.";
        fmsg_descricao.style.display = "block";
        descricao.classList.add("required"); //adicionar classe (com css é interessante)
        event.preventDefault();
    } else {
        fmsg_descricao.style.display = "none"; //faz texto aparece!!!
    }
}

data.onblur = (event) => {
    if (event.target.value == '') {
        fmsg_data.textContent = "Insira uma data.";
        fmsg_data.style.display = "block";
        data.classList.add("required"); //adicionar classe (com css é interessante)
        event.preventDefault();
    } else {
        fmsg_data.style.display = "none"; //faz texto aparece!!!
    }
}

data.onblur = (event) => {
    if (event.target.value == '') {
        fmsg_data.textContent = "Insira uma data.";
        fmsg_data.style.display = "block";
        data.classList.add("required"); //adicionar classe (com css é interessante)
        event.preventDefault();
    } else {
        fmsg_data.style.display = "none"; //faz texto aparece!!!
    }
}

 lotacao.onblur = (event) => {
     if (event.target.value.length < 1) {
         fmsg_lotacao.textContent = "Insira um número.";
         fmsg_lotacao.style.display = "block";
         lotacao.classList.add("required"); //adicionar classe (com css é interessante)
         event.preventDefault();
     } else {
        fmsg_lotacao.style.display = "none"; //faz texto aparece!!!
    }
}

formCadastroCliente.addEventListener("submit", (form) => {
    form.preventDefault(); //para não submeter
    const { elements } = form.target;
  
    const result = [];
  
    for (const element of elements) {
      if (element.name) {
        result.push(`${element.name}: ${element.value}`);
      }
    }
  
    alert("Mensagem enviada com sucesso! \n\n" + result.join("\n"));
  
    form.target.reset();
  });






