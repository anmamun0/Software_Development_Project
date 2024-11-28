let dataP;

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => {
        dataP = data.meals;
        randarALLPlayer(data.meals);
    })
    .catch(error => {
        console.log(error);
         
    });

let allFoods = [];

randarALLPlayer = (data) => 
{
    for (let user of data)
    {
        create_Player_Card(user);
    }
}

const create_Player_Card = (food) =>
{
    const playerBox = document.getElementById('foods');
    // console.log(data);

    const card = document.createElement('div');
        card.classList.add('card'); 
             
        card.innerHTML = `
            <div class="card max-w-xs mx-auto bg-white rounded-lg   overflow-hidden z-10 hover:shadow-2xl">
                    <img
                        class="w-full h-32 object-cover"
                        src="${food.strMealThumb}"
                        alt="Delicious Food"
                    />
                    <div class="p-6">
                        <div class="flex gap-8">
                        <h2 class="text-xl font-semibold text-gray-800">${food.strMeal}</h2>

                    <button class="text-blue-600 text-sm font-semibold rounded focus:outline-none" onclick="createPopUpDetails('${food.strMeal}','${food.strCategory}','${food.strArea}','${food.strMealThumb}','${food.strIngredient1}','${food.strMeasure1}','${food.strIngredient2}','${food.strMeasure2}','${food.strIngredient3}','${food.strMeasure3}','${food.strIngredient4}','${food.strMeasure4}','${food.strIngredient5}','${food.strMeasure5}',)">
                                Details
                            </button>

                        </div>
                        <p class="mt-2 text-gray-600"> Category: ${food.strCategory} <br>
                        Desh:  ${food.strArea} 
                        </p> 
                        <div class="mt-4 flex justify-between items-center">
                            <span class="text-md font-bold text-green-600">$4.99</span>
 
                            <button class="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-500 focus:outline-none" onclick="handleAddToCard('${food.idMeal}','${food.strMeal}','${food.strMealThumb}')">
                                Add to Cart
                            </button>

                        </div>
                    </div>
                </div>
        `
        playerBox.appendChild(card); 
}

const createPopUpDetails = (name,cat,area,img,Ing1,Meas1,Ing2,Meas2,Ing3,Meas3,Ing4,Meas4,Ing5,Meas5) => {
    const modal = document.getElementById('foodDetailsModel');
    modal.classList.remove('hidden');

    console.log(name);
    console.log(cat);
    console.log(area);
    console.log(img);
    console.log(Ing1);
    console.log(Meas1);
 
    modal.innerHTML = `
    <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-12 rounded-lg shadow-lg w-[90%] max-w-lg relative ">

            <!-- Close Button -->
            <button class="absolute top-0 right-1 text-gray-600 hover:text-gray-800 text-4xl font-bold p-4"
                aria-label="Close Modal" onclick="document.getElementById('foodDetailsModel').classList.add('hidden');" >
                &times;
            </button>
 
            <div class="space-y-6">
 
                <img 
                    src="${img}" 
                    alt="Delicious Food" 
                    class="w-full h-48 object-cover rounded-md shadow-sm"
                />
 
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-semibold text-gray-800">${name}</h2>
                    <p class="text-xl font-bold text-green-600">$12.99</p>
                </div>
 
                <div class="text-gray-700 space-y-2">
                    <p class="text-lg"><strong>Category:</strong> ${cat}</p>
                    <p class="text-lg"><strong>Country:</strong> ${area}</p>
                </div>
 
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
                    <ul class="list-disc pl-6 space-y-1 text-gray-600">
                        <li><strong>${Ing1}</strong>: ${Meas1}</li>
                        <li><strong>${Ing2}</strong>: ${Meas2}</li>
                        <li><strong>${Ing3}</strong>: ${Meas3}</li>
                        <li><strong>${Ing4}</strong>: ${Meas4}</li>
                        <li><strong>${Ing5}</strong>: ${Meas5}</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
`;


}



const handleAddToCard = (id,name, img) =>
{
    const cntBox = document.getElementById('count');
    let itemCnt = parseInt(cntBox.innerText);

    const sortItem = document.getElementById('foodList');


    if (itemCnt >= 12) {
        cntBox.innerHTML = `<p class="text-red-500">12 Items added! OverFlow </p>`
        showNotification("List over..");
        return;
    }

    if (allFoods.indexOf(id) != -1)
    {
        showNotification("This Item already added");
        return;
    }

    const div = document.createElement('div');
    div.classList.add('listOfFood');

    div.innerHTML = `


   <div class="food-sort-card flex gap-4 text-left border border-gray-300 my-3 p-2 rounded-lg w-56 ">
            <img src="${img}" alt="Food" class="w-16 h-16 rounded-full object-cover">
            <div class=' content-center'>
                <p class="font-semibold text-gray-800">${name}</p>
                <span class="text-sm text-gray-500">$12.99</span>
            </div>
        </div>

   `

    sortItem.append(div); 
    allFoods.push(id);
    cntBox.innerText = itemCnt + 1;
}


const removeButton = () =>
{
    const list_player = document.getElementById('foodList');
    list_player.innerHTML = ' ';
    const count = document.getElementById('count');
    allFoods.length = 0;
    count.innerText = "0";
}



const searchPlayer = () => {
    const foodBox = document.getElementById('foods');

    let s = document.getElementById('searchFild').value.toLowerCase();

    foodBox.innerHTML = '';
 
    const allOFSerachPlayers = s
        ? dataP.filter(user => user.strMeal.toLowerCase().includes(s))
        : dataP;
    
    allOFSerachPlayers.length
        ? allOFSerachPlayers.forEach(user => create_Player_Card(user))
        : foodBox.innerHTML = '<h1>Not Found any Player!</h1>'
} 
 

// Home Button click then input field will empty and will
document.getElementById('home').addEventListener('click', (event) =>
{ 

    document.getElementById('searchFild').value = '';
    searchPlayer();
});


// Show notification alert
function showNotification(message) {
    const alertBox = document.getElementById('notificationAlert');
    const alertMessage = document.getElementById('alertMessage');
 
    alertMessage.innerText = message; 
    alertBox.classList.remove('hidden');

    // Hide the alert box after 1 second (1000ms)
    setTimeout(function() {
        alertBox.classList.add('hidden');
    }, 1000);
}
