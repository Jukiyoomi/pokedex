
//*******************buttons
// const addBtn = document.querySelector('.add-type')
// const removeBtn = document.querySelector('.remove-type')


let pokemons = new Array()

window.addEventListener('load',() => {
    

    const validBtn = document.querySelector('.valid')
    //*******************inputs
    const inputName = document.querySelector('.pokemon-name')
    const inputType = document.querySelector('.types')
    const inputImg = document.querySelector('.img_url')
    //*******************containers
    const createCont = document.querySelectorAll("create-container")
    const pokedex = document.querySelector('.pokedex-container')
    const result = document.querySelector('.result')
    let i = 0
    let text = sessionStorage.getItem("pokedex")
    pokedex.innerHTML = text
    document.querySelectorAll('.valid').forEach(btn => {
        btn.addEventListener('click', deletePok)
    })

    validBtn.addEventListener('click', () => {
    createPokemon(inputName.value,inputType.value,inputImg.value)
    refreshPokedex()
    i++ 
    sessionStorage.setItem("pokedex", pokedex.innerHTML)
    // console.log(sessionStorage)
})


function createPokemon(name, type, url) {
    pokemons.forEach(pk => {
        if(pk.name == name && pk.type == type && pk.img == url) {
            result.innerHTML = "Ce pokémon existe déjà"
            return;
        } 
    })
    let pokemon = {
        name: name,
        type: type,
        img: url
    }
    pokemons.push(pokemon)
    // console.log(pokemons)
    result.innerHTML = "pokémon enregistré"

}

function refreshPokedex() {
    let pokCont = document.createElement('div')
    pokCont.classList.add('pokemon-container')

    let imgCont = document.createElement('div')
    imgCont.classList.add('img-container')
    imgCont.innerHTML = `<img src="${pokemons[i].img}" alt="">`
    pokCont.appendChild(imgCont)

    let nameCont = document.createElement('h2')
    nameCont.classList.add('name')
    nameCont.innerHTML = `${pokemons[i].name} `
    pokCont.appendChild(nameCont)

    let typeCont = document.createElement('div')
    typeCont.classList.add('type')
    typeCont.innerHTML = `${pokemons[i].type}`
    pokCont.appendChild(typeCont)
    pokCont.style.background = setBgColor(pokemons[i].type)

    let supBtn = document.createElement('button')
    supBtn.innerHTML = "Supprimer ce pokémon"
    supBtn.addEventListener('click',deletePok)
    supBtn.classList.add('valid')
    pokCont.appendChild(supBtn)

    pokedex.appendChild(pokCont)
}

function setBgColor(param) {
    switch (param) {
        case 'Acier':
            return '#ADADC6'
            break;
        case 'Combat':
            return '#A55239'
            break;
        case 'Dragon':
            return '#8858F6'
            break;
        case 'Eau':
            return '#399CFF'
            break;
        case 'Electrik':
            return '#FFC631'
            break;
        case 'Fée':
            return '#E09AE3'
            break;
        case 'Feu':
            return '#F75231'
            break;
        case 'Glace':
            return '#5ACEE7'
            break;
        case 'Insecte':
            return '#ADBD21'
            break;
        case 'Normal':
            return '#FCFCFC'
            break;
        case 'Plante':
            return '#7BCE52'
            break;
        case 'Poison':
            return '#B55AA5'
            break;
        case 'Psy':
            return '#FF73A5'
            break;
        case 'Roche':
            return '#BDA55A'
            break;
        case 'Sol':
            return '#D6B55A'
            break;
        case 'Spectre':
            return '#6363B5'
            break;
        case 'Ténèbres':
            return '#735A4A'
            break;
        case 'Vol':
            return '#9CADF7'
            break;
        default:
            break;
    }
}
function deletePok() {
    let pkmn = this.parentElement
    pokedex.removeChild(pkmn)
    // console.log(this)
    // let test = this.previousElementSibling.previousElementSibling
    // pokemons.forEach(pk => {
    //     console.log(test.innerText)
    //     if(pk.name == test.innerText) {
    //         pokemons.splice(pokemons.indexOf(pk),1)
    //     }
    // })
}
})



