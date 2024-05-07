// mobile menu control
function mobilemenuToggle() {
    const mobileMenu = document.querySelector('.header-navLinks-wrapper-mobile')
    const activeTag = ''

    mobileMenu.style.display === 'block' ? mobileMenu.style.display = 'none' : mobileMenu.style.display = 'block'

    const noscrollTag = 'noscroll'
    let webBody = document.querySelector('body')
    if (webBody) {
        webBody.classList.contains(noscrollTag) ? webBody.classList.remove(noscrollTag) : webBody.classList.add(noscrollTag)

    }

}

function carouselController() {

}
function elementToggleControl() {
    const toggleHead = document.querySelector('.toggle-head')
    const toggleBody = document.querySelector('.toggle-body')
    const activeTag = 'toggle-show'
    if (toggleHead !== null && toggleBody !== null) {

        toggleBody.classList.contains(activeTag) ? toggleBody.classList.remove(activeTag) : toggleBody.classList.add(activeTag)


    } else {
        alert('failed to find toggle')
    }
}


//sliderControl
function sliderControl() {
    const sliderWrap = document.querySelector('.slider-img')
    const currentValue = sliderWrap.style.top
    // sliderWrap.style.context.transformY(-10)
    alert('hi')

}

function generateAnimation() { }

function addAnimation(element) {


    let anim = `
    .works-wrap
     {
        animation: carousellMove 20s linear infinite; 
    }
    .works-wrap:hover{
        animation-play-state:paused
    }

    @keyframes carousellMove {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-288rem);
            /* wrapWidth - 備用總共寬度 -空白空間 */
        }
    }    
    `
    // element.style.animation= anim;

    const styleTag = document.createElement('style')
    styleTag.textContent = anim
    document.head.appendChild(styleTag);
}


function init() {
    const menubtn = document.querySelector('#menubtn')
    const menuWrap = document.querySelector('#mobile-menu ul.header-navLinks')

    const sliderBtns = document.querySelectorAll('.sliderBtn')
    if (sliderBtns) {
        for (let i = 0; i < sliderBtns.length; i++) {
            sliderBtns[i].addEventListener('click', sliderControl)
        }
    }

    //HEADER NAV MOBILE
    if (menubtn) {
        menubtn.addEventListener('click', mobilemenuToggle)
    }

    if (menuWrap) {
        menuWrap.addEventListener('click', (e) => {
            if (e.target === menuWrap) {
                mobilemenuToggle()
            }
        })

    }


    const carousellWrap = document.querySelector('.work-first')
    window.addEventListener('load', () => {
        addAnimation(carousellWrap)
    })



    // var swiper = new Swiper(".mySwiper", {});
}
init()


function classToggle(activeTag, element) {

    if (element && activeTag) {
        element.classList.contains(activeTag) ? element.classList.remove(activeTag) : element.classList.add(activeTag)
    }
}