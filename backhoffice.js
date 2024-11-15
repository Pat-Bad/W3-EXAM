//fetch('https://striveschool-api.herokuapp.com/api/product/', {headers: {
//Authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUzMzhhZDEyOTAwMTU4NzZiY2EiLCJpYXQiOjE3MzE2NjEzNjQsImV4cCI6MTczMjg3MDk2NH0.VQTkIDyBFS4Qu2GT5Q-qLlfr3b3yTPCS0xra04qvjVs ",
//}})
//.then ((response)=>{
//if (response.ok){
// return response.json()
//} else {
//   throw new Error ('errore')
//}
//})

class Product {
	constructor(name, description, brand, imageUrl, price) {
		this.name = name;
		this.description = description;
		this.brand = brand;
		this.imageUrl = imageUrl;
		this.price = price;
	}
}
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
		e.preventDefault();

		const nameInput = document.getElementById("albumName");
		const descriptionInput = document.getElementById("description");
		const brandInput = document.getElementById("brand");
		const imageUrlInput = document.getElementById("imageUrl");
		const priceInput = document.getElementById("albumPrice");

		const createdProduct = new Product(
			nameInput.value,
			descriptionInput.value,
			brandInput.value,
			imageUrlInput.value,
			priceInput.value
		);

		console.log("prodotto creato", createdProduct);

		fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzZDQzNmI0MDZiZTAwMTRiN2I3NmMiLCJpYXQiOjE3MzE2NjUwNzcsImV4cCI6MTczMjg3NDY3N30.l7MuNtm2Wpc7NnO-DfCNSUPMWtLF0t7cjHTic4uKTr8",
            },
            body: JSON.stringify(createdProduct),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nel salvataggio del prodotto");
                }
                return response.json();
            })
            .then((prodotto) => {
                console.log("Prodotto salvato:", prodotto);
    
            
                return fetch("https://striveschool-api.herokuapp.com/api/product/", {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzZDQzNmI0MDZiZTAwMTRiN2I3NmMiLCJpYXQiOjE3MzE2NjUwNzcsImV4cCI6MTczMjg3NDY3N30.l7MuNtm2Wpc7NnO-DfCNSUPMWtLF0t7cjHTic4uKTr8",
                    },
                });
            })
            .then((response) => response.json()) 
            .then((arrayOfProducts) => {
                console.log("Tutti i prodotti:", arrayOfProducts);
                
    
                
            })
            .catch((error) => {
                
                console.error("Errore:", error.message);
            });
    });