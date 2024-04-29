function create_game(image,name,atual_price,avaliations,link,desc = 0, margem=0){
    painel = document.getElementById('painel')
    let promocao=""
    let avaliations2=""
    for(let i = 0; i<5; i++){
        if (i<Math.round(avaliations)){
            avaliations2 += "&#9733;"
        }
        else{
            avaliations2 += "&#9734;"
        }
    }
    avaliations = avaliations2
    if(desc!=0){
        let old_price=atual_price
        atual_price-=(atual_price*(desc/100))
        atual_price=(atual_price+margem).toFixed(2)
        promocao="<p class='preco_antigo'>R$ "+old_price+"</p>"
        desc=" <span>"+desc+"%</span>"
    }
    else{
        desc=""
    }
    if(atual_price==0){
        atual_price="Gratuito para jogar"
    }
    else{
        atual_price="R$ "+String(atual_price)
    }
    painel.insertAdjacentHTML('beforeend', "<div class='jogo'><div onclick='redirecionar("+link+")'><img src='"+image+"' alt='"+name+"'><div><h1>"+name+"</h1>"+promocao+"<p class='preco_atual'>"+atual_price+desc+"</p><p class='avaliacao'>"+avaliations+"</p></div></div></div>");
}
let bd = [
    ["https://cdn.mobygames.com/covers/3694843-hollow-knight-nintendo-switch-front-cover.jpg","Hollow Knight",46.99,4,'"https://store.steampowered.com/app/367520/Hollow_Knight/"'],
    ["https://image.api.playstation.com/vulcan/ap/rnd/202209/0101/FKcRXNtkuNwC7bL24mgznJq5.png","Hollow Knight: Silksong",46.99,5,'"https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/"',90,-0.01],
    ["https://i.pinimg.com/736x/cb/62/90/cb6290ec436941da956f4a6080a29d22.jpg","Minecraft: Java & Bedrock Edition for PC",148.25,5,'"https://www.minecraft.net/pt-br"',10],
    ["https://i.etsystatic.com/19645555/r/il/f9a391/3205787491/il_1080xN.3205787491_ay6k.jpg","Stardew Valley",24.99,5,'"https://store.steampowered.com/app/413150/Stardew_Valley/"',50],
    ["https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg","Grand Theft Auto V",82.35,4,'"https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"',66],
    ["https://upload.wikimedia.org/wikipedia/pt/7/7e/Arte_promocional_de_Enigma_do_Medo.jpg","Enigma do Medo",49.99,5,'"https://store.steampowered.com/app/1507580/Enigma_do_Medo/"'],
    ["https://i.pinimg.com/originals/cb/11/8e/cb118ed754d1a4b8cb9eb97961231d88.jpg","Mineirinho Classic (Miner Ultra Adventures)",3.49,2,'"https://store.steampowered.com/app/1424240/Mineirinho_Classic_Miner_Ultra_Adventures/"'],
    ["https://cdn.startselect.com/production/products/images/45b78/61593/1773198479.jpg","Switch Galaxy Ultra",1.99,1,'"https://store.steampowered.com/app/359060/Switch_Galaxy_Ultra/"'],
    ["https://upload.wikimedia.org/wikipedia/pt/f/f9/Portal2cover.jpg","Portal 2",32.99,5,'"https://store.steampowered.com/app/620/Portal_2/"',66],
    ["https://image.api.playstation.com/vulcan/ap/rnd/202211/0314/TIUiemRUuWEX9oNZ2NwQZcTM.jpg","INSIDE",79.99,5,'"https://store.steampowered.com/app/304430/INSIDE/"'],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Celeste_box_art_full.png/1200px-Celeste_box_art_full.png","Celeste",59.99,5,'"https://store.steampowered.com/app/504230/Celeste/"'],
    ["https://m.media-amazon.com/images/M/MV5BZmExODcyNjUtOTQyZC00YWYxLTkzZDgtNGQ1YTlmNGFkZDgxXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg","SpeedRunners",46.99,5,'"https://store.steampowered.com/app/207140/SpeedRunners/"',66],
    ["https://m.media-amazon.com/images/M/MV5BYWJjOWY2NTEtZDJlNS00NzlmLWExNjAtY2NmNDFkNDgxYTcwXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg","Stumble Guys",0,4,'"https://store.steampowered.com/app/1677740/Stumble_Guys/"'],
    ["https://cdn.mobygames.com/covers/11113222-super-chicken-jumper-xbox-one-front-cover.jpg","SUPER CHICKEN JUMPER",10.89,5,'"https://store.steampowered.com/app/584640/SUPER_CHICKEN_JUMPER/"'],
    ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/443ce950-f8e1-4188-b51b-720aba16a967/ddqggjm-b7fdd5f9-f4bb-4cc3-bddd-e7b3071245bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0M2NlOTUwLWY4ZTEtNDE4OC1iNTFiLTcyMGFiYTE2YTk2N1wvZGRxZ2dqbS1iN2ZkZDVmOS1mNGJiLTRjYzMtYmRkZC1lN2IzMDcxMjQ1YmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LRlnnP2xMXcYpAJ1jrWncoEkNpUAZGMHTd5WySPQ4wI","Five Nights at Freddys",10.89,4,'"https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/"'],
    ["https://thumbnails.pcgamingwiki.com/e/e7/Garry%27s_Mod_Logo.jpg/300px-Garry%27s_Mod_Logo.jpg","Garry's Mod",25.99,4,'"https://store.steampowered.com/app/4000/Garrys_Mod/"']

]
// peguei da net função shuffle, link: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
shuffle(bd)
for(let i = 0; i<1000;i++){
    linha=Math.floor(Math.random()*bd.length)
    linha=i%bd.length
    create_game(bd[linha][0],bd[linha][1],bd[linha][2],bd[linha][3],bd[linha][4],bd[linha][5],bd[linha][6])
    if(linha==bd.length-1){
        shuffle(bd)
    }
}