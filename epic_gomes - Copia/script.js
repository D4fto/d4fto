const conta_button = document.getElementById("conta_button")
const login_check = document.getElementById("loggin")
const search = document.getElementById("procura")
const search_form = document.getElementById("pesquisa")
const preco_slider = document.getElementById("preco")
var login = false

function init(){
    for(let i=0; i<document.getElementsByClassName("filtros").length; i++){
        if(document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="1fr"){
            document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="1fr"
        }
        else if(!document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="0fr"){
            document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="0fr"
    
        }
    }
    if(preco_slider.value == preco_slider.max){
        document.getElementById("preco_output").style.display='none'
        document.getElementById("qualquer").style.display='block'
        document.getElementById("gratis").style.display='none'
    }
    else if(preco_slider.value == preco_slider.min){
        document.getElementById("preco_output").style.display='none'
        document.getElementById("gratis").style.display='block'
    }
    else{
        document.getElementById("preco_output").style.display='block'
        document.getElementById("qualquer").style.display='none'
        document.getElementById("gratis").style.display='none'
    }

}
init()
conta_button.addEventListener("click",function(){
    login = login_check.checked
    if(login){
        window.location.href = "./conta.html"
    }
    else{
        window.location.href = "./login.html"
    }
})
procura.addEventListener("input",function(){
    
    search_form.action="https://store.steampowered.com/search/?term="+search.value+"&ndl=1"
})
for(let i=0; i<document.getElementsByClassName("filtros").length; i++){
    if(document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="1fr"){
        document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="1fr"
    }
    else if(!document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="0fr"){
        document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="0fr"

    }
}
document.addEventListener("input",function(){
    for(let i=0; i<document.getElementsByClassName("filtros").length; i++){
        if(document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="1fr"){
            document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="1fr"
        }
        else if(!document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="0fr"){
            document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="0fr"

        }
    }
})
preco_slider.addEventListener("input",function(){
    if(preco_slider.value == preco_slider.max){
        document.getElementById("preco_output").style.display='none'
        document.getElementById("qualquer").style.display='block'
        document.getElementById("gratis").style.display='none'
    }
    else if(preco_slider.value == preco_slider.min){
        document.getElementById("preco_output").style.display='none'
        document.getElementById("gratis").style.display='block'
    }
    else{
        document.getElementById("preco_output").style.display='block'
        document.getElementById("qualquer").style.display='none'
        document.getElementById("gratis").style.display='none'
    }
})
