const getWelcome = (req, res) => {
  res.status(200).json({ message: "Welcome to the Movies API" });
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await require("../services").getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getWelcome,
  getAllMovies,
};
