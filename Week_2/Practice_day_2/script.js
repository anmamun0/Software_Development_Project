fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => {
        operation(data.meals);
        searchBar(data.meals);
    })
    .catch(err => {
        console.log(err);
    });

operation = (data) =>
{
    // console.log(data);
    const box = document.getElementById('product');

    data.forEach(element =>
    {
        
        const div = document.createElement('div');
        div.classList.add('card');
        // div.classList.add('sm:');

        div.innerHTML = `

            <div class='thumb flex gap-8 '>
                <div class='img basis-3/5'>
                    <img src='${element.strMealThumb}' class="rounded-xl h-52">
                </div>
                <div class="disc content-center" >
                    <h3 class="font-bold ">${element.strMeal}</h3>
                    <p>${element.strInstructions.slice(0, 30)}<p>
                </div>
            </div>

            <div class="mt-8 flex-xl gap-8">
                 <button class="text-white px-4 py-1 rounded text-xl  bg-cyan-600" >Details</button>
                 <button class="text-black px-4 py-1 rounded text-xl  bg-cyan-400 " >Add to Card</button>
            </div>
        `
        box.appendChild(div); 
    });

} 

const find_all = (s,data) => 
{
    // console.log(data);
    const output = document.getElementById('output');
    var result = ""
    var cnt = 0;
    for (let x of data)
    { 
        if (cnt >= 4) break;
        if (x.strMeal.toLowerCase().search(s) != -1)
        {
            result += `
                <span class="p-4 text-[14px]">${x.strMeal}</span>
                <hr class="h-[2px] w-[300px] ml-4 rounded-xl bg-slate-400">
            `; 
            cnt++;
            console.log(x.strMeal);
        }
    }

    if (result.length == 0)
    {
        result = `<span class="p-4 text-[14px]"><i>not found</i></span>`
    }

    output.innerHTML = result;
}
const searchBar = (data) =>
{
 
    const searchBox = document.getElementById('search'); 
    const output = document.getElementById('output');
    output.classList.remove('hidden');

    let s = "";

    searchBox.addEventListener('input', () => {
        s = searchBox.value.toLowerCase();

        output.innerHTML = `
        <span class="p-4 text-[14px]">${s}</span>
        <hr class="h-[2px] w-[300px] ml-4 rounded-xl bg-slate-400">
      `; 
        
        if (s.length < 1) {
            output.classList.add('hidden');  
        }
        else {
            output.classList.remove('hidden');
            find_all(s,data); 
        }
    });
};
 

console.dir(document);