import api from "./services/api";
const renderCards = require("./renderCards"); // Importamos nuestra función

const fetchData = async () => {
  try {
    const response = await api.get("/movies");
    // Una vez que tenemos los datos, ejecutamos el renderizado
    renderCards(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Iniciamos la ejecución
fetchData();
