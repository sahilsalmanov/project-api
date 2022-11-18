let rubl = document.querySelector('.rubl')
let dollar = document.querySelector('.dollar')
let euro = document.querySelector('.euro')
let  gbp = document.querySelector('.gbp')
let rubl2 = document.querySelector('.rubl2')
let dollar2 = document.querySelector('.dollar2')
let euro2 = document.querySelector('.euro2')
let gbp2 = document.querySelector('.gbp2')
let exchange1 = document.querySelector('.exchange1')
let exchange2 = document.querySelector('.exchange2')
let  input1 = document.querySelector('.input1')
let  input2 = document.querySelector('.input2')
let  bottom = document.querySelector('.bottom-bottom')
let value1 = document.querySelector('.value1')
let value2 = document.querySelector('.value2')


rubl.addEventListener('click',ff)
function ff(e) {
    e.target.classList.toggle('deyis')
    gbp.classList.remove('deyis')
    euro.classList.remove('deyis')
    dollar.classList.remove('deyis')
   }

dollar.addEventListener('click',fff)
function fff(e) {
       e.target.classList.toggle('deyis')
       gbp.classList.remove('deyis')
       euro.classList.remove('deyis')
       rubl.classList.remove('deyis')
      }
      
gbp.addEventListener('click',ffff)
function ffff(e) {
    e.target.classList.toggle('deyis')
    rubl.classList.remove('deyis')
    euro.classList.remove('deyis')
    dollar.classList.remove('deyis')
   }
   
euro.addEventListener('click',fffff)
function fffff(e) {
    e.target.classList.toggle('deyis')
    gbp.classList.remove('deyis')
    rubl.classList.remove('deyis')
    dollar.classList.remove('deyis')
   }




   
rubl2.addEventListener('click',gg)
function gg(e) {
    e.target.classList.toggle('deyis')
    gbp2.classList.remove('deyis')
    euro2.classList.remove('deyis')
    dollar2.classList.remove('deyis')
   }

dollar2.addEventListener('click',ggg)
   function ggg(e) {
       e.target.classList.toggle('deyis')
       gbp2.classList.remove('deyis')
       euro2.classList.remove('deyis')
       rubl2.classList.remove('deyis')
      }
      
gbp2.addEventListener('click',gggg)
function gggg(e) {
    e.target.classList.toggle('deyis')
    rubl2.classList.remove('deyis')
    euro2.classList.remove('deyis')
    dollar2.classList.remove('deyis')
   }
   
euro2.addEventListener('click',ggggg)
function ggggg(e) {
    e.target.classList.toggle('deyis')
    gbp2.classList.remove('deyis')
    rubl2.classList.remove('deyis')
    dollar2.classList.remove('deyis')
   }


  


//RUBL
bottom.addEventListener('click', dogru)
function dogru() {
    if (rubl.classList.contains('deyis') && rubl2.classList.contains('deyis')){
     input2.value = input1.value
     value1.innerText = '1 RUB = 1 RUB'
     value2.innerText = '1 RUB = 1 RUB'
     
    }
 
}

bottom.addEventListener('click', dogru5)
function dogru5() {
    let deyer 
    let deyer2
    if (rubl.classList.contains('deyis') && dollar2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=RUB&to=USD')
        .then(res => res.json())
        .then(data => {
     
          deyer = data.result
          value1.innerText = '1 RUB ' + '=' + ' ' + deyer + ' USD'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=USD&to=RUB')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 USD ' + '=' + ' ' + deyer2 + ' RUB'
  })
    }
}

bottom.addEventListener('click', dogru6)
function dogru6() {
    let deyer 
    let deyer2
    if (rubl.classList.contains('deyis') && euro2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=RUB&to=EUR')
        .then(res => res.json())
        .then(data => {
         
          deyer = data.result
          value1.innerText = '1 RUB ' + '=' + ' ' + deyer + ' EUR'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=EUR&to=RUB')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 EUR ' + '=' + ' ' + deyer2 + ' RUB'
  })
    }
}

bottom.addEventListener('click', dogru7)
function dogru7() {
    let deyer 
    let deyer2
    if (rubl.classList.contains('deyis') && gbp2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=RUB&to=GBP')
        .then(res => res.json())
        .then(data => {
   
          deyer = data.result
          value1.innerText = '1 RUB ' + '=' + ' ' + deyer + ' GBP'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=RUB')
  .then(res => res.json())
  .then(data => {
  
    deyer2 = data.result
    value2.innerText = '1 GBP ' + '=' + ' ' + deyer2 + ' RUB'
  })
    }
}




//USD
bottom.addEventListener('click', dogru2)
function dogru2() {
    if (dollar.classList.contains('deyis') && dollar2.classList.contains('deyis')){
     input2.value = input1.value

     value1.innerText = '1 USD = 1 USD '
     value2.innerText = '1 USD = 1 USD'
    }
 
}

bottom.addEventListener('click', dogru8)
function dogru8() {
    let deyer 
    let deyer2
    if (dollar.classList.contains('deyis') && rubl2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=USD&to=RUB')
        .then(res => res.json())
        .then(data => {
      
          deyer = data.result
          value1.innerText = '1 USD ' + '=' + ' ' + deyer + ' RUB'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=RUB&to=USD')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 RUB ' + '=' + ' ' + deyer2 + ' USD'
  })
    }
}

bottom.addEventListener('click', dogru9)
function dogru9() {
    let deyer 
    let deyer2
    if (dollar.classList.contains('deyis') && euro2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=USD&to=EUR')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 USD ' + '=' + ' ' + deyer + ' EUR'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=EUR&to=USD')
  .then(res => res.json())
  .then(data => {

    deyer2 = data.result
    value2.innerText = '1 EUR ' + '=' + ' ' + deyer2 + ' USD'
  })
    }
}

bottom.addEventListener('click', dogru10)
function dogru10() {
    let deyer 
    let deyer2
    if (dollar.classList.contains('deyis') && gbp2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=USD&to=GBP')
        .then(res => res.json())
        .then(data => {
         
          deyer = data.result
          value1.innerText = '1 USD ' + '=' + ' ' + deyer + ' GBP'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=USD')
  .then(res => res.json())
  .then(data => {
 
    deyer2 = data.result
    value2.innerText = '1 GBP ' + '=' + ' ' + deyer2 + ' USD'
  })
    }
}




//EURO
bottom.addEventListener('click', dogru3)
function dogru3() {
    if (euro.classList.contains('deyis') && euro2.classList.contains('deyis')){
     input2.value = input1.value
     value1.innerText = '1 EURO = 1 EURO'
     value2.innerText = '1 EURO = 1 EURO'
    }
 
}

bottom.addEventListener('click', dogru11)
function dogru11() {
    let deyer 
    let deyer2
    if (euro.classList.contains('deyis') && rubl2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=EUR&to=RUB')
        .then(res => res.json())
        .then(data => {
       
          deyer = data.result
          value1.innerText = '1 EURO ' + '=' + ' ' + deyer + ' RUB'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=RUB&to=EUR')
  .then(res => res.json())
  .then(data => {

    deyer2 = data.result
    value2.innerText = '1 RUB ' + '=' + ' ' + deyer2 + ' EURO'
  })
    }
}

bottom.addEventListener('click', dogru12)
function dogru12() {
    let deyer 
    let deyer2
    if (euro.classList.contains('deyis') && dollar2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=EUR&to=USD')
        .then(res => res.json())
        .then(data => {
       
          deyer = data.result
          value1.innerText = '1 EURO ' + '=' + ' ' + deyer + ' USD'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=USD&to=EUR')
  .then(res => res.json())
  .then(data => {
  
    deyer2 = data.result
    value2.innerText = '1 USD ' + '=' + ' ' + deyer2 + ' EURO'
  })
    }
}


bottom.addEventListener('click', dogru13)
function dogru13() {
    let deyer 
    let deyer2
    if (euro.classList.contains('deyis') && gbp2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=EUR&to=GBP')
        .then(res => res.json())
        .then(data => {
        
          deyer = data.result
          value1.innerText = '1 EURO ' + '=' + ' ' + deyer + ' GBP'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 GBP ' + '=' + ' ' + deyer2 + ' EURO'
  })
    }
}




//GBP
bottom.addEventListener('click', dogru4)
function dogru4() {
    if (gbp.classList.contains('deyis') && gbp2.classList.contains('deyis')){
     input2.value = input1.value
     value1.innerText = '1 GBP = 1 GBP'
     value2.innerText = '1 GBP = 1 GBP'
    }
 
}

bottom.addEventListener('click', dogru14)
function dogru14() {
    let deyer 
    let deyer2
    if (gbp.classList.contains('deyis') && rubl2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=GBP&to=RUB')
        .then(res => res.json())
        .then(data => {
       
          deyer = data.result
          value1.innerText = '1 GBP ' + '=' + ' ' + deyer + ' RUB'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 RUB ' + '=' + ' ' + deyer2 + ' GBP'
  })
    }
}

bottom.addEventListener('click', dogru15)
function dogru15() {
    let deyer 
    let deyer2
    if (gbp.classList.contains('deyis') && dollar2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=GBP&to=USD')
        .then(res => res.json())
        .then(data => {
       
          deyer = data.result
          value1.innerText = '1 GBP ' + '=' + ' ' + deyer + ' USD'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=USD&to=GBP')
  .then(res => res.json())
  .then(data => {
  
    deyer2 = data.result
    value2.innerText = '1 USD ' + '=' + ' ' + deyer2 + ' GBP'
  })
    }
}

bottom.addEventListener('click', dogru16)
function dogru16() {
    let deyer 
    let deyer2
    if (gbp.classList.contains('deyis') && euro2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
        .then(res => res.json())
        .then(data => {
        
          deyer = data.result
          value1.innerText = '1 GBP ' + '=' + ' ' + deyer + ' EUR'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=EUR&to=GBP')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 EUR ' + '=' + ' ' + deyer2 + ' GBP'
  })
    }
}







  

  








   
   
   
   











