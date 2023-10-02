const typeRouter = require("express").Router();
const createType = require("../controllers/type/createType");
const getTypeById = require("../controllers/type/getTypeById");
const getAllTypes = require("../controllers/type/getAllTypes");
const updateType = require("../controllers/type/updateType");
const deleteType = require("../controllers/type/deleteType");
const getTypeByName = require("../controllers/type/getTypeByName");

typeRouter.get("/", (req, res) => {
   const { name } = req.query;
   console.log(name)
  !name ? getAllTypes(req, res) : getTypeByName(req, res);
 }); 

typeRouter.get("/:id", getTypeById);
typeRouter.post("/create", createType);
typeRouter.put("/update", updateType);
typeRouter.delete("/delete", deleteType);

module.exports = typeRouter;