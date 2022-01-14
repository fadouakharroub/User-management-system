const { models } = require("../models");

const allDepartements = async (req, res) => {
  const departements = await models.departements.findAll({
      raw: true,
    })
    .catch((error) => console.log(error));
  await res.render("home", { departements });
};

const departementForm = async (req, res) => {
  try {
    const users = await models.users.findAll();
    return res.render("creer", {
      users,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

const saveDepartement = async (req, res) => {
   const { name, description } = req.body;
   try {
     await models.departements.create({ name, description});
     return res.redirect("/");
   } catch (error) {
     return res.send(error.message);
   }

};


module.exports = {
  allDepartements,
  departementForm,
  saveDepartement,
}