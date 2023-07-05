async function openDropMenu() {
    console.log('ooo')
    let navMenu = document.querySelector('.navMenu')

    navMenu.style.display = 'block'
    navMenu.style.animationName = 'openMenuNav'
}

async function closeDropMenu() {
    console.log('ooo')
    let navMenu = document.querySelector('.navMenu')

    navMenu.style.animationName = 'closeMenuNav'
    setTimeout(() => {
        navMenu.style.display = 'none'
    }, 300);
}

let openHome = async () => {
    window.location.href = '../index.html'
}