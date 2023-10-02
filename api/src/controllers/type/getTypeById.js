const { Types } = require("../../db");

const getTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await Types.findByPk(id);
    if (!type) throw new Error("Type not found");

    res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTypeById;