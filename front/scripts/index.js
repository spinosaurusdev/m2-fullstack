const axios = require("axios");
const renderCards = require("./renderCards"); // Importamos nuestra función

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    // Una vez que tenemos los datos, ejecutamos el renderizado
    renderCards(response.data);
    console.log(response.data);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Iniciamos la ejecución
fetchData();