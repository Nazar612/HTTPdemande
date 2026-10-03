// https://api.rawg.io/api/games
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