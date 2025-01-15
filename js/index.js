// test
// alert("Hello Dom")
//Accès aux élèment

// console.log(document.getElementById("premier"));
// const idPremier = document.getElementById("premier");

// const classContainer = document.getElementsByClassName("container");
// console.log(classContainer)
// console.log(classContainer[2])

// const baliseDiv = document.getElementsByTagName("h2")
// console.log(baliseDiv)

// const deuxieme = document.querySelector("h1")
// console.log(deuxieme)

// const All = document.querySelectorAll('div')
// console.log(All)

//cibler l'image et la mettre dans une variable
const image = document.querySelector('img')
// console.log(image)
//manipuler les attribut
image.setAttribute('src', '/assets/CSS3-icon.png')
image.setAttribute('alt', 'CSS')


//cibler le h1
const titre = document.getElementById("titre");
// console.log(titre);
titre.style.color = "red"
titre.style.backgroundColor = "#454545"
titre.innerHTML = "J'apprend à manipuler le DOM"


const bouton = document.createElement('button')
bouton.innerHTML="Valider"
const premiereDiv = document.getElementById("premier");
// console.log(premiereDiv)
premiereDiv.appendChild(bouton)
// bouton.style.borderRadius = '10px'
// bouton.style.padding = '10px'
// bouton.style.color = 'teal'

bouton.setAttribute('class', 'btn')

// bouton.addEventListener('click', function () {
//     const paragraphe = document.querySelector('p')
//     // console.log(paragraphe)
//     paragraphe.style.display= 'none'
// })
// image.addEventListener('mousemove', function () {
//     const paragraphe = document.querySelector('p')
//     // console.log(paragraphe)
//     paragraphe.style.display= 'block'
// })
// image.addEventListener('mouseleave', function () {
//     const paragraphe = document.querySelector('p')
//     // console.log(paragraphe)
//     paragraphe.style.display= 'none'
// })
//cibler le input
const tache = document.querySelector('#tache')
// console.log(tache)

bouton.addEventListener('click', function (){
    const input = tache.value;
    // console.log(input)
    const ul = document.querySelector("ul")
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = input
    tache.value =''
})


