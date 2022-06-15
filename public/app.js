

fetch('/cats')
    .then((res) => res.json())
    .then(updateCatList);

function updateCatList(cats) {
    let catElements = ""
    for (let cat of cats) {
        catElements += `<li> ${cat} </li>`
    }
    let catsList = document.getElementById("list")
    catsList.innerHTML = catElements
}

function addNewCat() {
    let inputElement = document.getElementById("newCat")
    let kitty = inputElement.value
    const data = { cat: kitty };
    fetch('/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(updateCatList)
        .catch((error) => {
            console.error("Error", error);
        })
    console.log("Added New Cat!")
}