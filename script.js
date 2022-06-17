const searchElement = document.getElementById("search-input");
const searchFormElement = document.getElementById("search-form");
const API_KEY = "15ba438c6382457bbb65323385b0cdb8";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const movieDivElement = document.getElementById("movies-grid");
const moviePopupContainerElement = document.getElementById("movie-container");
const INITIAL = 5;
let numToShow = INITIAL;
let movies;

searchFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
});

async function populateInitial() {
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
    // console.log(movies);
    populateMovieData(numToShow);
}

async function createPopup(movieTitle, movieId) {
    moviePopupContainerElement.innerHTML = `
        <div id="movie-popup">
            <h2 id="popup-name"></h2>
            <iframe id="popup-video" width="420" height="315"></iframe>
            <button id="popup-close-btn" onclick="hidePopup()">Close</button>
        </div>
    `;

    const popupNameElement = document.getElementById("popup-name");
    console.log("popupnameelement: ", popupNameElement);
    popupNameElement.innerText = movieTitle;

    const popupVideoElement = document.getElementById("popup-video");
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
    const result = await response.json();
    popupVideoElement.src = `https://www.youtube.com/embed/${result.results[0].key}?autoplay=1&mute=1`;
}

function hidePopup() {
    let moviePopupElement = document.getElementById("movie-popup");
    moviePopupContainerElement.removeChild(moviePopupElement);
}

function clearSearch() {
    searchElement.value = "";
    numToShow = INITIAL;
    movieDivElement.innerHTML = "";
    populateInitial();
}

async function populateMovieData() {
    console.log(movies);
    for (let i = 0; i < numToShow; i++) {
        const movieCardElement = document.createElement("div");
        movieCardElement.className="movie-card";
        movieCardElement.addEventListener("click", () => {
            createPopup(movies[i].title, movies[i].id);
        });

        // add movie cards
        movieCardElement.innerHTML += `
            <img class="movie-poster" src="${IMAGE_BASE_URL}/w342${movies[i].poster_path}" alt="${movies[i].title}" title="${movies[i].title}"/>
            <h2 class="movie-title">${movies[i].title}</h2>
            <p class="movie-votes">Rating: ${movies[i].vote_average}</p>
        `;

        movieDivElement.appendChild(movieCardElement);
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
    populateInitial();
}
