const { Types } = require("../../db");

const deleteType = async (req, res) => {
  try {
    const { id } = req.params;

    const typeToDelete = await Types.findByPk(id);

    if (!typeToDelete) throw Error("Type Not Found");

    await Types.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json(`The Type ${id} was deleted succesfully`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteType;