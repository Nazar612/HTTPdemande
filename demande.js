// https://api.rawg.io/api/games
const input = document.querySelector("#input");
const list = document.querySelector("#b")
const fetchs = fetch("https://api.rawg.io/api/games?key=4d1698ae38c54884a66b9fae45a13de7").then((response) => {
    console.log(response);
    if(!response.ok) {
        throw new Error("Помилка")
    }
    return response.json()
}).then((games) => {
    console.log(games);

});
console.log(fetchs);

//fetch дозволяє робити запит на типи данних

function gameTake(name) {
    fetch(`https://api.rawg.io/api/games?key=4d1698ae38c54884a66b9fae45a13de7&search=${name}`).then((reponse) => {
        if(!reponse.ok) {
            throw new Error("Error")
        }
        return reponse.json()
    }).then((game) => {
        infoTake(game.results)
    })
}

function infoTake(game) {
    const markup = game.map((game) => {
        return `<li class="b_item">
            <img src="${game.background_image}" alt="IMG" class="b_itemImg">
            <h1 class="b_itemTitle">${game.name}</h1>
            <p class="b_itemSubTitle">${game.tags.map((tag) => {
                return tag.name
            }).join(" ")}</p>
        </li>`
    }).join(" ")

    list.innerHTML = markup;
    console.log(markup);
}

function inputData(e) {
    let inputV = e.target.value;
    gameTake(inputV);
}
input.addEventListener("input", _.debounce(inputData, 400))