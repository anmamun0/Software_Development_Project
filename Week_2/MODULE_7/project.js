const loadALLProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            displayProduct(data);
        });
}


const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
        // console.log(product);

        const div = document.createElement('div');
        div.classList.add("card");

        div.innerHTML = `
            <img src='${product.image}' alt = '' class='p-2 w-60'>
            <h5 class='py-4'>${product.title.slice(0,25)}</h5>
            <p >${product.description.slice(0, 30)}</p>
            <p class='font-bold' >Price: ${product.price}</p>
            <button class='bg-gray-400 px-4 my-4 float'> Details </button>
            <button class='bg-cyan-500 px-4 ' onclick="handleAddToCard('${product.title}','${product.price}')"> Card </button>
        `
        productContainer.appendChild(div);
    });
}

const handleAddToCard = (name,price) =>
{
    // console.log(info);
    const container = document.getElementById('card-main-container');

    const div = document.createElement('div');
    div.classList.add('card-info');
    div.innerHTML = `
        <p>${name.slice(0,15)}</p>
        <h3 class='price font-bold'>${price}</h3> 

    `
    container.appendChild(div);

    updateTotal();
}

const updateTotal = () =>
{
    const allPrices = document.getElementsByClassName('price');
    let count = 0;
    for (const element of allPrices) {
        count += parseFloat(element.innerText);
    }

    document.getElementById('total').innerText = count.toFixed(2);
}


loadALLProduct();

