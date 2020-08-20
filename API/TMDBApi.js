// API/TMDBApi.js

const API_TOKEN = "d33c2c677d8930c1520121bca9fc64bf";
export function getFilmsFromApiWithSearchedText(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    console.debug(url)
    return fetch(url)
        .then((response) => response.json()
            .catch((error) => console.error(error),
        ))

}