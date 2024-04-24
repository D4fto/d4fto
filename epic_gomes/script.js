const conta_button = document.getElementById("conta_button")
const login_check = document.getElementById("loggin")
const search = document.getElementById("procura")
const search_form = document.getElementById("pesquisa")
const preco_slider = document.getElementById("preco")
const filtros = document.getElementsByClassName("filtro")
const menu_vertical = document.getElementsByClassName("menu_vertical")
var login = false
var generos = ""
function filtro_collapsable_chec(){
    for(let i=0; i<document.getElementsByClassName("filtros").length; i++){
        if(document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="1fr"){
            document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="1fr"
        }
        else if(!document.getElementsByClassName("filtros")[i].checked & document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows!="0fr"){
            document.getElementById(document.getElementsByClassName("filtros")[i].id+"_container").style.gridTemplateRows="0fr"

        }
    }
}
function preco_slider_custom(){
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
function init(){
    filtro_collapsable_chec()
    preco_slider_custom()
    filtros_chec()
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
    
    search_form.action="https://store.steampowered.com/search/?term="+search.value+generos+"&ndl=1"
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
    
})
preco_slider.addEventListener("input",function(){
    preco_slider_custom()
    
})
function filtros_chec(){
    generos=""
    for(let i=0; i<filtros.length; i++){
        if(filtros[i].classList.contains("gen_filtro")){
            if(filtros[i].checked){
                if(generos==""){
                    generos+="&tags="+filtros[i].name
                }
                else{
                    generos+="%2C"+filtros[i].name
                }
            }
        }
    }
}
menu_vertical[0].addEventListener("input", function(){
    filtros_chec()
    filtro_collapsable_chec()
})