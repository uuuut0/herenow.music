function mobilemenuToggle(){
    const mobileMenu =document.querySelector('.header-navLinks-wrapper-mobile')

    // alert(mobileMenu.style.display)
    // mobileMenu.classList.add('header-nav-mobile-active')
    // mobileMenu.style.height= mobileMenu.style.height ==='0px'?'500px':'0px'
        mobileMenu.style.display= mobileMenu.style.display ==='none'?'block':'none'
        // mobileMenu.style.top= mobileMenu.style.top ==='-10px'?'60px':'-10px'
        // if(mobileMenu.style.display=='none'){
        //     // mobileMenu.classList.add('header-nav-mobile-active')
        //     alert('y')
        // }else{
        //     // mobileMenu.classList.remove('header-nav-mobile-active')
        //     alert('n')

        // }



}

// function elementToggleControl(){
//     const toggleHead= document.querySelector('.toggle-head')
//     const toggleBody= document.querySelector('.toggle-body')
//     const activeTag ='toggle-show'
//     if(toggleHead !==null && toggleBody !==null ){

//         toggleBody.classList.contains(activeTag) ? toggleBody.classList.remove(activeTag) : toggleBody.classList.add(activeTag)


//     }else{
//         alert('failed to find toggle')
//     }
// }



function elementListToggleControl(toggleElement,toggleIcon){
    const activeTag ='toggle-show'
    if(toggleIcon){const activeIcon =''}


    const toggleBody= toggleElement.querySelector('.toggle-body')

    const prevActiveElement = toggleElement.parentNode.getElementsByClassName(activeTag)[0]
    if(toggleBody !==null ){

        toggleBody.classList.contains(activeTag)?toggleBody.classList.remove(activeTag):toggleBody.classList.add(activeTag)
        if(prevActiveElement ){
            prevActiveElement.classList.remove(activeTag)
        }

        }else{
        console.log('elementList','toggle from',toggleElement+'failed')
    }


}

function init(){
    const menubtn= document.querySelector('#menubtn')
    const menubtn2= document.querySelector('#mobile-menu h1')
    // const aboutToggle = document.querySelector('.history-item')
    const aboutToggles = document.getElementsByClassName('toggle-element')

    menubtn.addEventListener('click',()=>{

        mobilemenuToggle() 

    })
    if(menubtn2!==null){
        menubtn2.addEventListener('click',()=>{

            mobilemenuToggle()
        })

    }


    for(let i=0;i<aboutToggles.length;i++){
        aboutToggles[i].addEventListener('click',(e)=>{
            elementListToggleControl(e.currentTarget)
        })
    }


}
init()