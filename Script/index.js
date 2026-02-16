function loadCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategories(data))
}
function loadProducts(){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>displayProducts(data))
}
function displayCategories(Categories){
   const categoryContainer=document.getElementById("Category-container");
   for(cat of Categories){
    const categoryDiv=document.createElement("div");
    categoryDiv.innerHTML=`
    <Button class="btn btn-sm rounded-sm">${cat.toUpperCase()}</Button>
    
    `
   categoryContainer.append(categoryDiv);
   }
}

function displayProducts(Products){
    const productContainer =document.getElementById("products-container")
    for(product of Products){
        const {title,image,description}= product
        const productDiv=document.createElement("div")
        productDiv.innerHTML=`
        <div class="card  shadow-sm">
  <figure>
    <img
      src="${image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${title}</h2>
    
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        
        
        `
      productContainer.append(productDiv)  
    }
}



loadCategories()
loadProducts();