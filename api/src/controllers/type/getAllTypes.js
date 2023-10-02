const { Types } = require("../../db");
const axios = require ('axios');

const getAllTypes = async (req, res) => {
  try {
    let searchType = await Types.findAll();
    if (searchType.length > 0){
      return res.status(200).json({ searchType });
    }else {
      const response = await axios.get (`https://pokeapi.co/api/v2/type`);
      const data = response.data;
      console.log(data)
      return res.status(200).json(response.data.results)
    }
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = getAllTypes;