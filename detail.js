const addressBarContent = new URLSearchParams(window.location.search)

const productId = addressBarContent.get('productId')
console.log('productId', productId)

fetch('https://striveschool-api.herokuapp.com/api/product/'+'/'+ productId, {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUzMzhhZDEyOTAwMTU4NzZiY2EiLCJpYXQiOjE3MzE2NjEzNjQsImV4cCI6MTczMjg3MDk2NH0.VQTkIDyBFS4Qu2GT5Q-qLlfr3b3yTPCS0xra04qvjVs '
    }})

.then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("Errore nel recupero dei dettagli dell'evento")
    }
  })
  
  .then((singleProduct)=>{
    console.log('Prodotto', singleProduct)
    const col = document.getElementById('cardsHere')
    col.innerHTML = `
        <div class="card">
            <img src="${singleProduct.imageUrl}" class="card-img-top" alt="product image">
            <div class="card-body">
                <h5 class="card-title">${singleProduct.name}</h5>
                <p class="card-text">${singleProduct.description}</p>
                <p class="card-text">${singleProduct.price}€</p>
                <a class="btn btn-warning" href="./backhoffice.html?productId=${productId}">MODIFICA</a>
                <button class="btn btn-danger" onclick="deleteProduct()">ELIMINA</button>
            </div>
        </div>
    `
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', deleteProduct);
  })
  .catch((error) => {
    console.log('ERROR', error);
  })
  .catch((error) => {
    console.log('ERROR', error)
  })
  
  
  const deleteProduct = function () {
    fetch('https://striveschool-api.herokuapp.com/api/product/'+'/'+ productId,
         { method:'DELETE',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUzMzhhZDEyOTAwMTU4NzZiY2EiLCJpYXQiOjE3MzE2NjEzNjQsImV4cCI6MTczMjg3MDk2NH0.VQTkIDyBFS4Qu2GT5Q-qLlfr3b3yTPCS0xra04qvjVs ',
        
    }})
.then ((response)=>{
    if (response.ok){alert('Prodotto eliminato')
        
        window.location.assign('./homepage.html')
    }
    else {
        throw new Error ('Non è stato possibile eliminare il prodotto')
    }
})
.catch((error)=>{console.log('Errore', error)})
  }