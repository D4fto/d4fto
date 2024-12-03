
function showSeeMore(id){
    for (const element of document.querySelectorAll('.seeMore')) {
        inActive(element)
    }
    document.getElementById('seem'+id).classList.add('active')
}
function inActive(element){
    element.classList.remove('active')
}
window.addEventListener('load',()=>{
    for (const element of document.querySelectorAll('.project')) {
        if(document.getElementById('seem'+element.getAttribute('onclick').match(/\d+/)[0])){

            document.getElementById('seem'+element.getAttribute('onclick').match(/\d+/)[0]).querySelector('.img').style.backgroundImage=`url('https://d4fto.github.io/images/${element.getAttribute('name')}cover.png')`
        }
        element.style.backgroundImage=`url('https://d4fto.github.io/images/${element.getAttribute('name')}cover.png')`
    }
})
function switchTheme(element){
    if(element.classList.contains('bi-moon-fill')){
        element.classList.remove('bi-moon-fill')
        element.classList.add('bi-sun-fill')
        document.documentElement.style.setProperty('--color1', '#eee')
        document.documentElement.style.setProperty('--color2', '#000')
        document.documentElement.style.setProperty('--color4', '#f5f5ef')
        return
    }
    document.documentElement.style.setProperty('--color1', '#0c0c0b')
    document.documentElement.style.setProperty('--color2', '#fff')
    document.documentElement.style.setProperty('--color4', '#141413')
    element.classList.add('bi-moon-fill')
    element.classList.remove('bi-sun-fill')
    return

}