function contar(){
    var num = document.getElementById('txtnumber')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if(passo.value.length == 0 || fim.value.length == 0 || num.value.length == 0 || passo.value == 0){
        alert('Número Inválido!')
    } else {
        res.innerHTML = 'Contagem: '
        var i = Number(num.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(i > f){
            for(var c = f; c <= i; c += p){
                res.innerHTML += `\u{1F449} ${c} `
            }
        } else{
            for(var c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        
    }

    
}