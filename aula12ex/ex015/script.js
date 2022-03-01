function verificar(){ 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('Data Inválida')
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(gen == null){
            alert('Dados Inválidos')
        }
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'crianca-m.jpg') 
            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovem-m.jpg') 

            } else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'adulto-m.jpg') 

            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-m.jpg') 

            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'crianca-f.png') 

            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovem-f.jpg') 


            } else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'adulto-f.jpg') 

                
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-f.jpg') 

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gen} e tem ${idade} anos de idade`
        res.appendChild(img)
    
         
    }
    

}