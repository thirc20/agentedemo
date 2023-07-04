let marca = document.querySelector('#marca')
let section1 = document.querySelector('#section1')

let loadSite = () => {
    marca.style.animationName = 'enter'
}

let fixedMenu = async () => {
    let marcaPos = marca.getBoundingClientRect()
    let section2Pos = section2.getBoundingClientRect()
    
    if(marcaPos.top <= 24 && marca.classList[0] == 'visible'){
        await visibleHeader()
        await pageTo()
        await enterCards()
    }
    else
    if(marcaPos.top > 24 && marca.classList[0] == 'unvisible'){
        await unvisibleHeader()
        await closeCards
    }
}

let visibleHeader = async () => {
    let headerSite = document.querySelector('.bgMenu')

    headerSite.style.display = 'block'
    headerSite.style.animationName = 'enter'
    headerSite.style.height = '7vh'
    
    section1.style.width = '50vw'

    marca.style.opacity = '0%'
    marca.classList.add('unvisible')
    marca.classList.remove('visible')

    return
}

let unvisibleHeader = async () => {
    let headerSite = document.querySelector('.bgMenu')

    headerSite.style.animationName = 'close'

    setTimeout(() => {
        headerSite.style.display = 'none'
    }, 1000);

    section1.style.width = ''

    marca.style.opacity = '100%'
    marca.classList.add('visible')
    marca.classList.remove('unvisible')
}

let pageTo = async () => {
    let scrollPageTo = document.querySelector('main')

    scrollPageTo.scroll({
        top: 700,
        behavior: "smooth",
    })

    return
}

let enterCards = async () => {
    let section2 = document.querySelector('#section2')
    
    section2.style.animationName = 'enter'

    setTimeout(() => {
        section2.style.opacity = '1'
    }, 2000);
    return
}

let closeCards = async () => {
    let section2 = document.querySelector('#section2')
    
    section2.style.animationName = 'close'

    setTimeout(() => {
        section2.style.opacity = '1'
    }, 2000);
    return
}

let enterJobs = async () => {
    let section2 = document.querySelector('#section2')
    let section2Pos = Number(Number(section2.getBoundingClientRect().top.toPrecision(3)))

    let section3 = document.querySelector('#section3')
    
    if(section2Pos <= 490){
        section3.style.animationName = 'enter'
        
        setTimeout(() => {
            section3.style.opacity = '1'
        }, 2000);
    }

}

async function openDropMenu() {
    console.log('ooo')
    let navMenu = document.querySelector('.navMenu')

    navMenu.classList.remove('navMenu')
    navMenu.style.display = 'block'
    navMenu.style.animationName = 'openMenuNav'
    navMenu.classList.add('navMenuOpen')
}

async function closeDropMenu() {
    console.log('ooo')
    let navMenu = document.querySelector('.navMenu')

    navMenu.style.animationName = 'closeMenuNav'
    setTimeout(() => {
        navMenu.style.display = 'none'
    }, 300);
}