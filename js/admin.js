// Listar eventos
const eventos = D.querySelector('#eventos')

const options = {
    method: 'GET',
    redirect: 'follow'
}

const selecionarEventos = async () => {
    return await fetch(`${BASE_URL}/events`, options).then(response => {
        return response.json(); 
    }).then(result => result);
}

D.addEventListener('DOMContentLoaded', async () => {

    const resposta = await selecionarEventos();

    const eventosApi = resposta.map( (item, id) => {

        return `
        <tr>
        <th scope="row">${id+1}</th>
        <td>${new Date(item.scheduled).toLocaleDateString(
            "pt-BR"
          )}</td>
        <td>${item.name}</td>
        <td>${item.attractions}</td>
        <td>
            <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#modal"
            data-whatever="'${item.name}'">ver reservas</a>
            <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>
        `
    })
    
    eventos.innerHTML = eventosApi;
})