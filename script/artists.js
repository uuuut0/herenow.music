function mobilemenuToggle() {
    const mobileMenu = document.querySelector('.header-navLinks-wrapper-mobile')
    const activeTag = ''

    mobileMenu.style.display === 'block' ? mobileMenu.style.display ='none' :mobileMenu.style.display = 'block'

    const noscrollTag = 'noscroll'
    let webBody = document.querySelector('body')
    if (webBody) {
        webBody.classList.contains(noscrollTag) ? webBody.classList.remove(noscrollTag) : webBody.classList.add(noscrollTag)

    }

}

function pageNoScroll(){
    const noscrollTag = 'noscroll'
    let webBody = document.querySelector('body')
    if (webBody) {
        webBody.classList.contains(noscrollTag) ? webBody.classList.remove(noscrollTag) : webBody.classList.add(noscrollTag)

    }
}

function displayToggle(tag){
    const element = document.querySelector(tag)
    if (element) {
        element.style.display === 'block' ? element.style.display = 'none' : element.style.display = 'block'
    }

}
function classToggle(activeTag,element){

    if (element&&activeTag) {
        element.classList.contains(activeTag) ? element.classList.remove(activeTag) : element.classList.add(activeTag)
    }
}

// lightbox =======
function lightboxControl() {

    const activeTag = 'lb-active';
    const noscrollTag = 'noscroll'

    const lb = document.querySelector('.photowall-lightbox')
    const otherElement = document.querySelector('.lightbox-container .panel-icon-box')
    const webBody = document.querySelector('body')

    if (lb) {
        lb.classList.contains(activeTag) ? lbCloseTask() : lbOpenTask()
    }
    if (otherElement) {
        otherElement.style.display === 'block' ? otherElement.style.display = 'none' : otherElement.style.display = 'block'
    }
    if (webBody) {
        webBody.classList.contains(noscrollTag) ? webBody.classList.remove(noscrollTag) : webBody.classList.add(noscrollTag)
    }

    function lbCloseTask() {
        lb.classList.remove(activeTag)
        lightboxMobileRest()
    }
    function lbOpenTask() {
        lb.classList.add(activeTag)
    }
}
function lightboxRest() {

    const activeTag = 'lb-active';
    const noscrollTag = 'noscroll'

    const lb = document.querySelector('.photowall-lightbox')
    const otherElement = document.querySelector('.lightbox-container .panel-icon-box')
    const webBody = document.querySelector('body')

    if (lb && lb.classList.contains(activeTag)) {
        lb.classList.remove(activeTag)
    }
    if (otherElement && otherElement.style.display === 'block') {
        otherElement.style.display = 'none'
    }
    if (webBody && webBody.classList.contains(noscrollTag)) {
        webBody.classList.remove(noscrollTag)
    }

    lightboxMobileRest()

}
function lightboxMobileExpand() {
    const boxExpand = document.querySelector('.lightbox-wrap .lb-img')
    const boxBelow = document.querySelector('.lightbox-wrap .lb-content')

    const expandTag = 'lb-img-expand'
    const belowExpandTag = 'lb-content-expand'

    if (boxExpand && boxBelow) {
        boxExpand.classList.contains(expandTag) ? boxExpand.classList.remove(expandTag) : boxExpand.classList.add(expandTag)
        boxBelow.classList.contains(belowExpandTag) ? boxBelow.classList.remove(belowExpandTag) : boxBelow.classList.add(belowExpandTag)
    }

}
function lightboxMobileRest() {
    const boxExpand = document.querySelector('.lightbox-wrap .lb-img')
    const boxBelow = document.querySelector('.lightbox-wrap .lb-content')

    const screenWidth = screen.width
    const expandTag = 'lb-img-expand'
    const belowExpandTag = 'lb-content-expand'

    if (boxExpand && boxBelow) {
        if (boxExpand.classList.contains(expandTag)) { boxExpand.classList.remove(expandTag) }
        if (boxBelow.classList.contains(belowExpandTag)) { boxBelow.classList.remove(belowExpandTag) }


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
    const menuWrap = document.querySelector('#mobile-menu ul.header-navLinks')


    const lbBtn = document.querySelector('.photoitem')
    const lbCloseBtn = document.querySelector('.lightbox-container .panel-icon-box')

    const lbBtns = document.querySelectorAll('.photoitem')
    const lbCloseBtns = document.querySelectorAll('.lightbox-container .panel-icon-box')

    //menu-mobile 
    const clickToExpand = document.querySelector('.lightbox-wrap .lb-content')



    //HEADER NAV MOBILE
    if(menubtn){
        menubtn.addEventListener('click',mobilemenuToggle)
    }
    if (menubtn2) {
        menubtn2.addEventListener('click',mobilemenuToggle)
    }
    // const menuDrop =document.querySelector()
    if(menuWrap){
        menuWrap.addEventListener('click', (e) => {
            console.log(e.target)
            if (e.target === menuWrap) {
                mobilemenuToggle()
            }
        })
    }


    //LIGHTBOX control

    const lbContainer = document.querySelector('.photowall-lightbox')
    if (lbBtn && lbCloseBtn) {


        for(let i=0;i<lbBtns.length;i++){
            lbBtns[i].addEventListener('click',lightboxControl)
        }
        for(let i=0;i<lbCloseBtns.length;i++){
            lbCloseBtns[i].addEventListener('click',lightboxControl)
        }


        // lbBtn.addEventListener('click', lightboxControl)
        lbCloseBtn.addEventListener('click', lightboxControl)
    }
    //click the lightboxdrop control

    if (lbContainer) {
        lbContainer.addEventListener('click', (e) => {
            if (e.target === lbContainer) {
                lightboxControl()
            }
        })
    }

    //LIGHTBOX MOBILE
    if (clickToExpand) {
        const initWindowWidth = window.innerWidth;

        if (initWindowWidth <= 768) {
            clickToExpand.addEventListener('click', lightboxMobileExpand)
        } else {
            clickToExpand.removeEventListener('click', lightboxMobileExpand)
        }


        window.addEventListener('resize', () => {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 768) {
                clickToExpand.addEventListener('click', lightboxMobileExpand)
            } else {
                clickToExpand.removeEventListener('click', lightboxMobileExpand)
            }

        })

    }

    window.addEventListener('resize', lightboxRest)

}

init()