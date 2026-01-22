// Seleccionamos el contenedor una sola vez
const container = document.getElementById("movies-grid");

function renderCards(data) {
  if (!container) return; // Validación de seguridad

  // Limpiamos el contenedor
  container.innerHTML = "";

  // Iteramos sobre el array de películas
  data.forEach((movie) => {
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

// Exportamos la función para que otros archivos la usen
module.exports = renderCards;