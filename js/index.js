'use strict'

const images = [
    {'id': '1', 'url':'./img/arct.jpg'}, 
    {'id': '2', 'url':'./img/Hiatus.jpg'},
    {'id': '3', 'url':'./img/kooks.jpg'},
   

]

const containerItens = document.querySelector('#container-itens')


const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>
        `
    })
}

loadImages(images, containerItens)

let itens = document.querySelectorAll('.item')

const previus = () => {
    containerItens.appendChild(itens[0])
    itens = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = itens[itens.length -1]
    containerItens.insertBefore( lastItem, itens[0])
}

document.querySelector('#previus').addEventListener('click', previus)
document.querySelector('#next').addEventListener('click', next)
itens = document.querySelectorAll('.item')
