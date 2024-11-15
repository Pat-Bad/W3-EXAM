fetch('https://striveschool-api.herokuapp.com/api/product/', 
{headers: {
Authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUzMzhhZDEyOTAwMTU4NzZiY2EiLCJpYXQiOjE3MzE2NjEzNjQsImV4cCI6MTczMjg3MDk2NH0.VQTkIDyBFS4Qu2GT5Q-qLlfr3b3yTPCS0xra04qvjVs",
}})

.then ((response)=>{
    if (response.ok){
        return response.json()
    } else {
        throw new Error ('errore')
    }
})

.then ((arrayOfProducts)=>{
    console.log('prodotti', arrayOfProducts)

    const row = document.getElementById('productsRow')
    arrayOfProducts.forEach(product => {
        const newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-md-6', 'col-lg-4')
        newCol.innerHTML = `
              <div class="card g-3 h-100 gy-3">
                  <img src="
                  ${product.imageUrl}" class="card-img-top" alt="product-image">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text ">${product.description}</p>
                      <p class="card-text ">${product.brand}</p>
                      <p class="card-text ">${product.price}</p>
                      <a href="./product-detail.html?productId=${
                        product._id
                      }" class="btn btn-primary">Vai ai dettagli!</a>
                      <a href="./product-detail.html?productId=${
                        product._id
                      }" class="btn btn-primary">Modifica prodotto</a>
                  </div>
              </div>
          `
        row.appendChild(newCol)
      })
    })
    .catch((error) => {
        console.log('ERROR', error)
      })