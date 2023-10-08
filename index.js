document.getElementById('card'). addEventListener('click', function(){
    const nameValue = document.getElementById('card-title')
    const newCard = nameValue.innerText;
    const container = document.getElementById('new-item')
    const p = document.createElement('p')
    p.innerText = newCard;
    container.appendChild(p)
   
    
})
