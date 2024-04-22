const conta_button = document.getElementById("conta_button")
const login_check = document.getElementById("loggin")
const search = document.getElementById("procura")
const search_form = document.getElementById("pesquisa")
var login = false

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
    console.log(procura.value)
    search_form.action="https://store.steampowered.com/search/?term="+search.value+"&supportedlang=brazilian&ndl=1"
})