const usuario_input = document.getElementById("usuario")
const senha_input = document.getElementById("login_pass")
const usuario_erro = document.getElementById("usuario_erro")
const form_login = document.getElementById("form_login")
console.log(usuario_input.value)
let contas = [
    ['123456',"D4fto","pedrohenriquetunes1@gmail.com"],
    ['123456789',"Admin","Admin@gmail.com"],
]
function mostrar_senha(){
    if(senha_input.type === 'password'){
        senha_input.setAttribute('type','text')
        senha_input.nextElementSibling.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }
    else{
        senha_input.setAttribute('type','password')
        senha_input.nextElementSibling.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
    console.log(senha_input.value)
    
}
function verificar_login(){
    for(let i = 0; i<contas.length; i++){
        if(contas[i].includes(usuario_input.value)){
            if(contas[i][0]===senha_input.value){
                sessionStorage.setItem('login',true)
                sessionStorage.setItem('user',usuario_input.value)
                form_login.action="./conta.html"
            }
        }
    }
}
function verificar_usuario(){
    let existe = false
    if(usuario_input.value!=null||usuario_input.value!=""){
        usuario_input.nextElementSibling.style.display = ''
    }
    for(let i = 0; i<contas.length; i++){
        if(contas[i].includes(usuario_input.value)){
            existe=true
            break
        }
    }
    if(existe==true){
        usuario_input.nextElementSibling.classList.replace('bi-x-lg','bi-check')
        usuario_erro.style.display="none"
    }
    else if(usuario_input.nextElementSibling.classList.contains('bi-check')){
        usuario_input.nextElementSibling.classList.replace('bi-check','bi-x-lg')
        usuario_erro.style.display=""
    }
    else{
        usuario_erro.style.display=""
    }
    if(usuario_input.value==""){
        usuario_input.nextElementSibling.style.display = 'none'
        usuario_erro.style.display="none"
    }
}