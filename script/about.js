function mobilemenuToggle() {
    const mobileMenu = document.querySelector('.header-navLinks-wrapper-mobile')

    // alert(mobileMenu.style.display)
    // mobileMenu.classList.add('header-nav-mobile-active')
    // mobileMenu.style.height= mobileMenu.style.height ==='0px'?'500px':'0px'
    mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none'
    // mobileMenu.style.top= mobileMenu.style.top ==='-10px'?'60px':'-10px'
    // if(mobileMenu.style.display=='none'){
    //     // mobileMenu.classList.add('header-nav-mobile-active')
    //     alert('y')
    // }else{
    //     // mobileMenu.classList.remove('header-nav-mobile-active')
    //     alert('n')

    // }



}

function lightboxControl() {

    const activeTag = 'lb-active';
    const noscrollTag = 'noscroll'

    const lb = document.querySelector('.photowall-lightbox')
    const otherElement = document.querySelector('.lightbox-container .panel-icon-box')
    const webBody = document.querySelector('body')

    if (lb) {
        lb.classList.contains(activeTag) ? lb.classList.remove(activeTag) : lb.classList.add(activeTag)
    }
    if (otherElement) {
        // if(otherElement.style.display ==='none'){
        //     otherElement.style.display='block'
        // }else{
        //     otherElement.style.display='none'
        // }
        otherElement.style.display === 'block' ? otherElement.style.display = 'none' : otherElement.style.display = 'block'

        console.log(otherElement.style.display)
    }
    if (webBody) {
        console.log(webBody.classList.length)
        webBody.classList.contains(noscrollTag)? webBody.classList.remove(noscrollTag) :webBody.classList.add(noscrollTag)
    }
}


function elementListToggleControl(toggleElement, toggleIcon) {
    const activeTag = 'toggle-show'
    if (toggleIcon) { const activeIcon = '' }


    const toggleBody = toggleElement.querySelector('.toggle-body')

    const prevActiveElement = toggleElement.parentNode.getElementsByClassName(activeTag)[0]
    if (toggleBody !== null) {

        toggleBody.classList.contains(activeTag) ? toggleBody.classList.remove(activeTag) : toggleBody.classList.add(activeTag)
        if (prevActiveElement) {
            prevActiveElement.classList.remove(activeTag)
        }

    } else {
        console.log('elementList', 'toggle from', toggleElement + 'failed')
    }


}

function init() {
    const menubtn = document.querySelector('#menubtn')
    const menubtn2 = document.querySelector('#mobile-menu h1')
    // const aboutToggle = document.querySelector('.history-item')
    const aboutToggles = document.getElementsByClassName('toggle-element')

    const lbBtn = document.querySelector('.photoitem')
    const lbCloseBtn = document.querySelector('.lightbox-container .panel-icon-box')


    //HEADER NAV MOBILE
    menubtn.addEventListener('click', () => {

        mobilemenuToggle()

    })
    if (menubtn2 !== null) {
        menubtn2.addEventListener('click', () => {

            mobilemenuToggle()
        })

    }

    // ABOUT TOGGLE
    if (aboutToggles) {
        for (let i = 0; i < aboutToggles.length; i++) {
            aboutToggles[i].addEventListener('click', (e) => {
                elementListToggleControl(e.currentTarget)
            })
        }
    }


    //LIGHTBOX
    if (lbBtn) {
        lbBtn.addEventListener('click', lightboxControl)

    }
    if (lbCloseBtn) {
        lbCloseBtn.addEventListener('click', lightboxControl)

    }
}
init()