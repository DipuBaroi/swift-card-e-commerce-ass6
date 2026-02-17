const removeActive = ()=>{
    const activeBtn = document.getElementsByClassName('active')
    for(let btn of activeBtn){
        btn.classList.remove('active')
    }
}

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
        // console.log(category);
        const categoryBtn = document.createElement('div')
        categoryBtn.innerHTML=`
        <button id="${category}" onclick="loadCategoryProduct(\`${category}\`)" class="btn btn-outline btn-primary rounded-2xl">${category} </button>
        
        `
        categoryContainer.append(categoryBtn)
    }
}

const loadProduct = ()=>{
    const url ='https://fakestoreapi.com/products'
    fetch(url)
    .then(res =>res.json())
    .then(data=>{
        removeActive()
        document.getElementById('btn-all').classList.add('active')
        dispayProduct(data)
    })
}

const loadCategoryProduct = (category)=>{
    // console.log(category);
    const url = `https://fakestoreapi.com/products/category/${category}`
    console.log(url);

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActive()
        const cliskBtn =document.getElementById(`${category}`)
        cliskBtn.classList.add('active')
        dispayProduct(data)
    })
}

const dispayProduct =(products)=>{
    const productContainer = document.getElementById('product-container')
    productContainer.innerHTML="";
    products.forEach(product=>{
        console.log(product);
        const productDiv = document.createElement('div')
        productDiv.innerHTML=`
        
        <div class="p-4 space-y-5 shadow-lg rounded-lg lg:h-full ">
                <div class="bg-gray-200 " ><img src=${product.image} alt=""></div>
                <div class="flex justify-between items-center ">
                    <h3 class=" font-medium text-blue-700 bg-blue-200 rounded-xl px-3">${product.category}</h3>
                    <div class="flex items-center">
                        <i class="fa-solid fa-star text-yellow-500"></i>
                        <h2>${product.rating.rate}</h2>
                        <h2>(${product.rating.count})</h2>

                    </div>
                </div>
                <p class="line-clamp-1">${product.description}</p>
                <h2 class="text-xl font-bold">$${product.price}</h2>
                <div class="flex justify-between items-center">
                    <button onclick="loadProductDetails('${product.id}')" class="btn btn-active px-5"><i class="fa-regular fa-eye"></i> Details </button>
                    <button class="btn btn-active btn-primary px-6"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                </div>
            </div>

        
        `
        productContainer.append(productDiv)
    })
}

loadCategory()
