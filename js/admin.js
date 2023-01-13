// // Listar eventos
// const eventos = D.querySelector('#eventos')

// const options = {
//     method: 'GET',
//     redirect: 'follow'
// }

// const selecionarEventos = async () => {
//     return await fetch(`https://soundgarden-api.deta.dev/events`, options).then(response => {
//         return response.json(); 
//     }).then(result => result);
// }

// D.addEventListener('DOMContentLoaded', async () => {

//     const resposta = await selecionarEventos();

//     const eventosApi = resposta.map( (item, id) => {

//         return `
//         <tr>
//         <th scope="row">${id+1}</th>
//         <td>${new Date(item.scheduled).toLocaleDateString(
//             "pt-BR"
//           )}</td>
//         <td>${item.name}</td>
//         <td>${item.attractions}</td>
//         <td>
//             <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#modal"
//             data-whatever="'${item.name}'">ver reservas</a>
//             <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
//             <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
//         </td>
//     </tr>
//         `
//     })
    
//     eventos.innerHTML = eventosApi;
// })

const tabela = document.querySelector("#tabelaEventos");
const tabelaBody = document.querySelector("#tabela");
const botaoEdit = document.querySelector("#editar-eventos");

console.log(botaoEdit);

async function getEventos(){
    const response = await fetch('https://soundgarden-api.deta.dev/events')

    const eventos = await response.json();

   for(let i=0; eventos.length>i;i++){

        const eventoTable = `
        <tr>
            <th scope="row">${[i]}</th>
            <td>${new Date(eventos[i].scheduled).toLocaleDateString()} - ${new Date(eventos[i].scheduled).toLocaleTimeString()}</td>
            <td>${eventos[i].name}</td>
            <td>${eventos[i].attractions}</td>
            <td>
                <a href="reservas.html?id=${eventos[i]._id}" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${eventos[i]._id}" id= "editar-eventos" class="btn btn-secondary">editar</a>
                <a href="excluir-evento.html?id=${eventos[i]._id}" class="btn btn-danger">excluir</a>
            </td>
        </tr>`

        tabelaBody.innerHTML += eventoTable;
   }     
    
}

getEventos();