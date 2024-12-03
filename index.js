const theCard = document.querySelector('.row');
console.log(theCard);

const product = [
  {
      name: "Wireless Mouse",
      price: 29.99,
      category: "Electronics",
      description: "A sleek and ergonomic wireless mouse with adjustable DPI settings."
  },
  {
      name: "Bluetooth Headphones",
      price: 59.99,
      category: "Electronics",
      description: "Noise-canceling over-ear headphones with up to 20 hours of battery life."
  },
  {
      name: "Standing Desk",
      price: 199.99,
      category: "Furniture",
      description: "Adjustable height standing desk with a sturdy build and modern design."
  },
  {
      name: "Coffee Maker",
      price: 49.99,
      category: "Kitchen",
      description: "Programmable coffee maker with a 12-cup capacity and built-in grinder."
  },
  {
      name: "Yoga Mat",
      price: 24.99,
      category: "Fitness",
      description: "Eco-friendly yoga mat with non-slip surface and extra cushioning."
  },
  {
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      description: "Latest model smartphone with a high-resolution display and advanced camera system."
  },
  {
      name: "Gaming Chair",
      price: 149.99,
      category: "Furniture",
      description: "Ergonomic gaming chair with adjustable armrests and lumbar support."
  },
  {
      name: "Blender",
      price: 89.99,
      category: "Kitchen",
      description: "High-powered blender with multiple speed settings and a large capacity jar."
  },
  {
      name: "Running Shoes",
      price: 79.99,
      category: "Fitness",
      description: "Lightweight and breathable running shoes with excellent cushioning and support."
  }
];



function ourCard(cards){
  cards.forEach(function(cardd){

    const myCard = document.createElement('div');
    console.log(myCard);
    
    myCard.classList.add('col');
    myCard.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img src="images/image-baklava-desktop.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cardd.name}</h5>
              <p> category: ${cardd.category}</p> 
              <p>price: ${cardd.price}</p>
    
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    
    
    `
    theCard.appendChild(myCard)
    
  
    
    
    
  })

}
ourCard(product)




