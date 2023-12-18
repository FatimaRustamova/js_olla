//---Data---//
let combine = document.querySelector(".combine");
let length = 3;

function getAllElement() {
    fetch("http://localhost:3000/olla")
    .then(res => res.json())
    .then(data => {
        data.slice(0, length).forEach(element => {
            combine.innerHTML += `
            <div class="design">
                <i class="bi bi-heart" onclick="favoriteEl(${element.id})"></i>
                <h3>${element.name}</h3>
                <img src="${element.image}" alt="">
                <p>${element.desc}</p>
                <button onclick="viewDetails(${element.id})">View Details</button>
                <button onclick="deleteObject(${element.id})">Delete</button>
                <button onclick="updateObject(${element.id})">Update</button>
            </div>
            `
        });
    })
}

getAllElement();


//---View Details---//
function viewDetails(id) {
    window.location = `./details.html?id=${id}`
}


//---Delete---//
function deleteObject(id) {
    axios.delete(`http://localhost:3000/olla/${id}`);
    window.location.reload();
}


//---Update---//
function updateObject(id) {
    window.location = `./update.html?id=${id}`
}


//---Load More---//
let load = document.querySelector("#load");


//---Favorite---//
function favoriteEl(id) {
    axios.get(`http://localhost:3000/olla/${id}`)
    .then(res => {
        axios.post("http://localhost:3000/favorites", res.data)
    })
}

load.addEventListener("click", ()=>{
    if(load.innerText == "Load More"){
        length += 3;
        combine.innerHTML = "";
        getAllElement();
        load.innerText = "Less More";
    }
    else{
        length -= 3;
        combine.innerHTML = "";
        getAllElement();
        load.innerText = "Load More";
    }
})


//---Nav---//
let nav = document.querySelector("nav");

window.addEventListener("scroll", ()=> {
    if(window.scrollY>120){
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.transition = "all .5s ease";
    }
    else{
        nav.style.position = "";
        nav.style.transition = "all .5s ease";
    }
})


//---Hurricane---//
let hurricane = document.querySelector(".hurricane");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>600){
        hurricane.style.visibility = "visible"
    }
    else{
        hurricane.style.visibility = ""
    }
})

hurricane.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


//---Modal---//
let i = document.querySelector("#i");
let modal = document.querySelector(".modal");

i.addEventListener("click", ()=>{
    modal.classList.toggle("none")
})