document.getElementById('code').addEventListener('click', (event) => {
    // console.log("haha, You clicked");
    const inputValue = document.getElementById("searchBox").value;

    const printH = document.getElementById("title").innerText;

    console.log(printH);
    console.log(inputValue);

    const container = document.getElementById('comment');

    const p = document.createElement("p");
    p.classList.add("child");
    p.style.cursor = "pointer";
    p.innerText = inputValue;

    container.appendChild(p);


    document.getElementById("searchBox").value = ""

    const allComment = document.getElementsByClassName("child");
    console.log(allComment);

    for (let x of allComment)
    {
        x.addEventListener("click", (e) => { 
            e.target.parentNode.removeChild(x);
        });
    }

    // document.title = "hello";
})
