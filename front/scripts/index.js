// 1. Seleccionamos el contenedor donde irán las películas
const container = document.getElementById("movies-grid");

$.get("https://students-api.up.railway.app/movies", (data) => {
  renderMovies(data);
});

// 2. Función para renderizar
function renderMovies(data) {
  // Limpiamos el contenedor por si acaso
  container.innerHTML = "";

  // 3. Iteramos sobre el array de películas
  data.forEach((movie) => {
    // Creamos el HTML de la card usando Template Literals
    const movieCard = `
            <div class="card">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="card-content">
                    <h3>${movie.title}</h3>
                    <p>Year: ${movie.year}</p>
                    <p>Director: ${movie.director}</p>
                    <p>Duration: ${movie.duration}</p>
                    <p>Genre: ${movie.genre.join(", ")}</p>
                    <span>⭐ ${movie.rate}</span>
                </div>
            </div>
        `;

    container.innerHTML += movieCard;
  });
}

renderMovies(data);
console.log(data);
