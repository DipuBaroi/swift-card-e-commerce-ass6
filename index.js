const loadCategory = () =>{
    const url = 'https://fakestoreapi.com/products/categories';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategory(data))
}

const displayCategory = (categories) =>{
    const categoryContainer = document.getElementById('category-container');
    // categoryContainer.innerHTML="";
    for(let category of categories){
        const categoryBtn = document.createElement('div')
        categoryBtn.innerHTML=`
        <button class="btn btn-outline btn-primary rounded-2xl">${category} </button>
        
        `
        categoryContainer.append(categoryBtn)
    }
}
loadCategory()
