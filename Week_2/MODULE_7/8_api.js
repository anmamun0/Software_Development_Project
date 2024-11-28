fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayData(data);
    })
    .catch(error => {
        console.log(error);
    });


const displayData = (userData) =>
{
    const container = document.getElementById('user_data_container');

    userData.forEach(user => {
        // console.log(user);
        const div = document.createElement("div");
        div.classList.add("user");
        div.innerHTML = `
            <h4>Title</h4>
            <p>Description</p>
            <button>Details</button>
        `
        container.appendChild(div);
    })
}