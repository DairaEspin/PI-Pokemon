const { Types } = require("../../db");


const getTypeByName = async (req, res) => {
  try {
    const { name } = req.query;
    const type = await Types.findOne({ where: { name } });

    type
      ? res.status(200).json(type)
      : res.status(404).json({ error: "Type Not Found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTypeByName;