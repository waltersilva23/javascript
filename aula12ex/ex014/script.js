function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}.`
    if(hora >= 0 && hora < 12){
        img.src = "fotomanha.png"
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png"
    } else {
        img.src = "fotonoite.png"
    }
}