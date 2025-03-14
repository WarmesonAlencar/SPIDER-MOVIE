const apiKey = 'SUA_CHAVE_DA_API';
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=marvel`;

document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('search').value;
    fetch(`${apiUrl}&query=${searchTerm}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results));
});

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.release_date}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}