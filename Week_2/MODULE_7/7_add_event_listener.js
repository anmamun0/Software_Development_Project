document.getElementById('code').addEventListener('click', (event) => {
    // console.log("haha, You clicked");
    const inputValue = document.getElementById("searchBox").value;

    const printH = document.getElementById("title").innerText;

    console.log(printH);
    console.log(inputValue);

    const container = document.getElementById('comment');

    const p = document.createElement('p');
    p.innerHTML = inputValue;

    container.appendChild(p);


    document.getElementById("searchBox").value = ""
})
