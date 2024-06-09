const conta_button = document.getElementById("conta_button")
if(sessionStorage.getItem("login")==null){
    sessionStorage.setItem("login",false)
}
function redirecionar(addres){
    window.location.href=addres
}

{
    conta_button.addEventListener("click",function(){
        login=sessionStorage.getItem("login")
        if(login=='true'){
            redirecionar("./conta.html")
        }
        else{
            redirecionar("./login.html")
        }
    })
}
if(sessionStorage.getItem("login")=='true'){
    conta_button.nextElementSibling.querySelector("img").src="https://as1.ftcdn.net/v2/jpg/03/16/01/42/1000_F_316014283_yGC7pqaC6QgpH3h08Y1U1M7SH36f3Imr.jpg"
}
else{
    conta_button.nextElementSibling.querySelector("img").src="./user.png"
}
function ativar_login(){
    sessionStorage.setItem("login",true)
    redirecionar("./conta.html")
}
function desativar_login(){
    sessionStorage.setItem("login",false)
    redirecionar("./")
}
for(let i = 0; i<document.getElementsByClassName("show_user").length; i++){
    for(let i = 0; i<document.getElementsByClassName("show_user")[i].querySelectorAll("span").length; i++){
        document.getElementsByClassName("show_user")[i].querySelectorAll("span")[0].innerHTML=sessionStorage.getItem("user")
    }
    
}