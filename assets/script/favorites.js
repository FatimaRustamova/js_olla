let favorites = document.querySelector(".favorites");

fetch("http://localhost:3000/favorites")
.then(res =>  res.json())
.then(data => {
    data.forEach(element => {
        favorites.innerHTML += `
        <div class="design">
        <i class="bi bi-heart-fill"></i>
        <h3>${element.name}</h3>
        <img src="${element.image}" alt="">
        <p>${element.desc}</p>
        <button onclick="deleteEl(${element.id})">Delete</button>
    </div>
        `
    })
})

//---Delete---//
function deleteEl(id) {
    axios.delete(`http://localhost:3000/favorites/${id}`);
    window.location.reload();
}
