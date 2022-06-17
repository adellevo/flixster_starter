const searchElement = document.getElementById("search-input");
const searchFormElement = document.getElementById("search-form");
const API_KEY = "15ba438c6382457bbb65323385b0cdb8";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const movieDivElement = document.getElementById("movies-grid");
const moviePopupElement = document.getElementById("movie-popup");
const popupNameElement = document.getElementById("popup-name");
const popupVideoElement = document.getElementById("popup-video");
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

async function setPopupData(movieTitle, movieId) {
    popupNameElement.innerText = movieTitle;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
    const result = await response.json();
    popupVideoElement.src = `https://www.youtube.com/embed/${result.results[0].key}?autoplay=1&mute=1`;
}

function showPopup() {
    if (moviePopupElement.classList.contains("hide")) {
        moviePopupElement.classList.remove("hide");
    }
}

function hidePopup() {
    moviePopupElement.classList.add("hide");
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
            setPopupData(movies[i].title, movies[i].id);
            showPopup();
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
