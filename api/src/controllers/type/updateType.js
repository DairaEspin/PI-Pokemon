const { Types } = require("../../db");

const updateType = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, image,  hp, attack, defense, speed, height, weight } = req.body;

    const type = await Types.findByPk(id);

    if (!type) throw Error("Type not found");

    type.id = id || type.id;
    type.name = name || type.name;
    type.image = image || type.image;
    type.hp = hp || type.hp;
    type.attack = attack || type.attack;
    type.defense = defense || type.defense;
    type.speed= speed || type.speed;
    type.height = height || type.height;
    type.weight = weight || type.weight;

    await type.save();

    return res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateType;