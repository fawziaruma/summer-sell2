document.getElementById('card'). addEventListener('click', function(){
    const nameValue = document.getElementById('card-title')
    const newCard = nameValue.innerText;
    const container = document.getElementById('')
    const p = document.createElement('p')
    p.innerText = newCard;
    container.appendChild(p)
   
})

// let total = 0;

// function handleCLikBtn(target) {
//   const selectedItemContainer = document.getElementById("selected-items");
//   const itemName = target.parentNode.childNodes[1].innerText;
//   const li = document.createElement("li");
//   li.innerText = itemName;
//   selectedItemContainer.appendChild(li);
//   const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
//   total = parseInt(total) + parseInt(price);
//   document.getElementById("total").innerText = total;
// }