let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector("#details");

fetch(`http://localhost:3000/olla/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML += `
    <div class="design">
    <h3>${data.name}</h3>
    <img src="${data.image}" alt="">
    <p>${data.desc}</p>
</div>
    `
})