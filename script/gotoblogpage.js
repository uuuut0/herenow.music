function init(){
    const elements = document.querySelectorAll('.ofItem, .focus-block-wrap, .article-card, .news-card')
    if(elements){
        elements.forEach((element)=>{
            element.addEventListener('click',()=>{
                window.location.href = '/blog.html'
                console.log('click')
            })
            console.log(element)
        })
    }
}
window.onload=init
