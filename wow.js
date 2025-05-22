let number = ''
function kkkk(){
    for(let i = 0; i<2; i++){
        number += i
        if(Math.random()>.65){
            break
        }
        kkkk()
    }
}
for(let i = 0; i<2; i++){
    kkkk()
}
console.log(number)