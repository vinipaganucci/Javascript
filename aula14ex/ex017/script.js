function calcular (){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('select')
    if(num.value.length == 0){
        alert('Digite um número!')
    }
    else{
         var n = Number(num.value)
         var c = 1
         tab.innerHTML = ''
         for(c = 1; c <= 10; c++){
             var item = document.createElement('option')
             item.text = `${n} x ${c} = ${n*c}`
             tab.appendChild(item)
        
        }
    
 
    } 
    
    
}

