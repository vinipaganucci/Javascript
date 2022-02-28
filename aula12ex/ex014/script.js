function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 0
    msg.innerHTML = `It's now ${hora} o'clock.`
   
    if(hora >= 6 && hora < 12){
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#F8B40B'
    } else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#F2AB8B'
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#305194'

    }
}
