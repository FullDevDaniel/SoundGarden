const formCadastroCliente = document.querySelector(".col-6");
const nomeCompleto = document.querySelector("#nome");
const atrações = document.querySelector("#atracoes");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
const lotacao = document.querySelector("#lotacao");
const button = document.getElementsByClassName("btn btn-primary")[0];

let btnSave = document.getElementById("btnSave");
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

formCadastroCliente.onsubmit = (event) => {

    if (nomeCompleto.value.length < 3 &&
        atrações.value == '' &&
        data.value == '' &&
        descricao.value == '' &&
        lotacao.value == '') {
        alert("Por favor, preencha o formulário")
        event.preventDefault(); //bloquear envio!!!
    } else if (nomeCompleto.value.length < 3) {
        nomeCompleto.focus()
        alert("Por favor, informe o nome")
        event.preventDefault(); //bloquear envio!!!
    } else if (atrações.value == '') {
        atrações.focus()
        alert("Por favor, informe a atração")
        event.preventDefault(); //bloquear envio!!!

    } else if (descricao.value == '') {
        descricao.focus()
        alert("Por favor, escreva uma descrição")
        event.preventDefault(); //bloquear envio!!!
    }
    else if (data.value == '') {
        data.focus()
        alert("Por favor, informe a data")
        event.preventDefault(); //bloquear envio!!!
    } else if (lotacao.value == '') {
        lotacao.focus()
        alert("Por favor, informe a lotação")
        event.preventDefault(); //bloquear envio!!!
    } else {

        event.preventDefault();


        let name = formCadastroCliente.nome.value;
        let atracoes = formCadastroCliente.atracoes.value;
        let descricao = formCadastroCliente.descricao.value;
        let data = formCadastroCliente.data.value;
        let lotacao = formCadastroCliente.lotacao.value;


        let attractions = atracoes.split(",");

        let raw = {
            "name": name,
            "poster": "link da imagem",
            "attractions": attractions,
            "description": descricao,
            "scheduled": data,
            "number_tickets": lotacao,
        };


        function postEvent() {
            let requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(raw),
                redirect: "follow",
            };

            let endpoint = 'https://soundgarden-api.deta.dev/events';
            fetch(endpoint, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            alert("Seu evento foi cadastrado com sucesso!");

            document.querySelector("#nome").value = "";
            document.querySelector("#atracoes").value = "";
            document.querySelector("#descricao").value = "";
            document.querySelector("#data").value = "";
            document.querySelector("#lotacao").value = "";

        }

        postEvent();
    };


};