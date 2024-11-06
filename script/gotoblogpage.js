function init(){
    const elements = document.querySelectorAll('.ofItem, .focus-block-wrap, .article-card, .news-card')
    const urlbase = window.location.origin.includes("github.io")?'/herenow.music':''
    if(elements){
        elements.forEach((element)=>{
            element.addEventListener('click',()=>{
        
                window.location.href = urlbase+'blog.html'
                console.log('click')
            })
            console.log(element)
        })
    }
}
window.onload=init
