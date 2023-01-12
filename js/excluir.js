const formExcluirEvento = document.querySelector('#formExcluirEvento')
const eventoId = document.querySelector('#eventoId')
const nome = document.querySelector('#nome')
const banner = document.querySelectorquerySelector('#banner')
const atracoes = document.querySelector('#atracoes')
const descricao = document.querySelector('#descricao')
const data = document.querySelector('#data')
const lotacao = document.querySelector('#lotacao')
const BASE_URL = 'https://soundgarden-api.deta.dev'

const options = {
    method: 'GET',
    redirect: 'follow'
};

const selecionarEventoId = async (id) => {
    return await fetch(`${BASE_URL}/events/${id}`, options).then(response => {
        return response.json()
    }).then(result => result)
};

// Carregando os dados do evento via id passado na url
document.addEventListener('DOMContentLoaded', async () =>{
    
    // pegando o id passado via url
    const { search } = window.location;
    const params = new URLSearchParams(search)
    const idEvento = params.get('id')

    const resposta = await selecionarEventoId(idEvento)

    if(resposta?.message){
        alert('erro ao buscar o evento')
    }else{
        eventoId.value = resposta?._id
        nome.value = resposta?.name
        banner.value = resposta?.poster
        atracoes.value = resposta?.attractions
        descricao.value = resposta?.description
        data.value = resposta?.scheduled
        lotacao.value = resposta?.number_tickets
    }

});

let requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

const removeEvento = async (id) => {
    return await fetch(`${BASE_URL}/events/${id}`, requestOptions).then(response => response)
}; 

formExcluirEvento.addEventListener('submit', async (form) => {
    form.preventDefault()

    // pegando o valor do nome do evento
    nomeEvento = nome.value

    const delConfirm = confirm(`Deseja realmente ecluir "${nomeEvento}" da lista de eventos?`)

    if(delConfirm){
        removeEvento(eventoId.value)
        alert(`Evento "${nomeEvento}" excluído com sucesso! :)`)
        window.location = 'admin.html'
    }else if(!delConfirm){
        alert(`Exclusão de "${nomeEvento}" cancelada! :)`)
        window.location = 'admin.html'
    }else{
        alert(`Erro na remoção do evento "${nomeEvento}".`)
    }
})


const btnRemove = document.getElementById('btn-Danger')

btnRemove.addEventListener('click', (e)=>{
    e.preventDefault()

confirm('tem certeza que deseja excluir?')


})





