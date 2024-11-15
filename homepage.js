fetch('https://striveschool-api.herokuapp.com/api/product/', 
{headers: {
Authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUzMzhhZDEyOTAwMTU4NzZiY2EiLCJpYXQiOjE3MzE2NjEzNjQsImV4cCI6MTczMjg3MDk2NH0.VQTkIDyBFS4Qu2GT5Q-qLlfr3b3yTPCS0xra04qvjVs ",
}})

.then ((response)=>{
    if (response.ok){
        return response.json()
    } else {
        throw new Error ('errore')
    }
})

.then ((products)=>{
    console.log( 'prodotti', products)})