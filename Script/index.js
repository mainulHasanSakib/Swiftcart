function loadCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategories(data))
}

function displayCategories(Categories){
   const categoryContainer=document.getElementById("Category-container");
   for(cat of Categories){
    console.log(cat)
    const categoryDiv=document.createElement("div");
    categoryDiv.innerHTML=`
    <Button class="btn btn-sm">${cat.toUpperCase()}</Button>
    
    `
   categoryContainer.append(categoryDiv);
   }
}
loadCategories()