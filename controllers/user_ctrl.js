const {
    models,
   } = require("../models");

const allUsers = async (req, res)=>{
  const users = await  models.users.findAll({
    raw:true
  }).catch(error=>console.log(error))
  await  res.render('home', {users});
}

const userForm = async (req, res)=>{
  // departement.findAll().then((data)=>{res.render('create',{data})})
  try {
    const departements = await models.departements.findAll();
console.log(departements.departement)
    return res.render('create', {
      departements,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

  const saveUser = async (req, res)=>{
        user.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
       })
return  res.redirect('/');
  }
  
  const editUser =  (req, res)=>{
     user.findOne({
      where:{
        id:req.params.id
      },
    }).then((user)=>{
      console.log(user)
      res.render('edit', {user})
    })
    
  }

  const updateUser = (req, res)=>{
    user.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      
   },{where:{id:req.body.id}}).then(()=>{res.redirect('/')})

    
  }

  const viewUser = async (req, res)=>{
    const {id} = req.params;
    const user = await user.findOne({
      where:{
        id:id
      },
      raw:true
    }).catch(error=>console.log(error))

    res.render('user', {user})
  }

  const deleteUser = (req, res)=>{
    // const {id} = req.params;
     user.destroy({
      where:{
         id : req.params.id
      },
    })


    res.redirect('/')
  }

module.exports = {
    allUsers,userForm,saveUser,editUser,updateUser,deleteUser
}
   
 