const searchElement = document.getElementById("search-input");
const searchFormElement = document.getElementById("search-form");
const API_KEY = "15ba438c6382457bbb65323385b0cdb8";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const movieDivElement = document.getElementById("movies-grid");
let movies;
let numToShow = 5;

searchFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
});

async function populateInital() {
    let URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(URL);
    const result = await response.json();
    movies = result.results;
    populateMovieData(numToShow);
}

async function getMovies() {
    movieDivElement.innerHTML = "";
    let URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchElement.value}`;
    const response = await fetch(URL);
    const result = await response.json();
    movies = result.results;
    populateMovieData(numToShow);
}

function populateMovieData() {
    for (let i = 0; i < numToShow; i++) {
        movieDivElement.innerHTML += ` 
        <div class="movie-card">
            <h2 class="movie-title">${movies[i].title}</h2>
            <p class="movie-votes">Rating: ${movies[i].vote_average}</p>
            <img class="movie-poster" src="${IMAGE_BASE_URL}/w342${movies[i].poster_path}" alt="${movies[i].title}" title="${movies[i].title}"/>
        </div>`;
    }
}

function updateShowAmount() {
    if (numToShow >= movies.length) {
        numToShow = movies.length
    }
    else {
        numToShow += 5;
    }

    // reset
    movieDivElement.innerHTML = ``;
    populateMovieData(numToShow);
}

window.onload = function () {
    populateInital();
}
