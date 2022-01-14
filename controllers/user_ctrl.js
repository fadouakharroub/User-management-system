const { models } = require("../models");

const allUsers = async (req, res) => {
  const users = await models.users
    .findAll({
      raw: true,
    })
    .catch((error) => console.log(error));
  await res.render("home", { users });
};

const userForm = async (req, res) => {
  try {
    const departements = await models.departements.findAll();
    return res.render("create", {
      departements,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

const saveUser = async (req, res) => {
   const { name, email, password,departementId } = req.body;
   try {
     await models.users.create({ name, email, password, departementId });
     return res.redirect("/");
   } catch (error) {
     return res.send(error.message);
   }

};

const editUser = async (req, res) => {
 try {
    const user = await models.users.findOne({
      where: {
        id: req.params.id,
      },
    })
      return res.render("edit", {
        user,
      });
    } catch (error) {
      return res.send(error.message);
    }
};

const updateUser = (req, res) => {
  models.users.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      { where: { id: req.body.id } }
    )
    .then(() => {
      res.redirect("/");
    });
};


const deleteUser = (req, res) => {
   models.users.destroy({
     where: {
       id: req.params.id,
     },
   });

  res.redirect("/");
};

module.exports = {
  allUsers,
  userForm,
  saveUser,
  editUser,
  updateUser,
  deleteUser,}