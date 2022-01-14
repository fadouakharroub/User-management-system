const {
    departement,
    user,
   } = require("../models");

const allDepartements = async (req, res)=>{
  const departement = await departement.findAll({
    raw:true
  }).catch(error=>console.log(error))
  await  res.render('home', {departement});
}

const userForm =  (req, res)=>{
  departement.findAll().then((data)=>{res.render('departement',{data})})
    
  }

  const saveDepartement = async (req, res)=>{
        departement.departement({
          name: req.body.name,
          description: req.body.description,
       })
return  res.redirect('/');
  }
  
  const editDepartement =  (req, res)=>{
     departement.findOne({
      where:{
        id:req.params.id
      },
    }).then((departement)=>{
      console.log(departement)
      res.render('edit', {departement})
    })
    
  }

  const updateDepartement = (req, res)=>{
    user.update({
      name: req.body.name,
      description: req.body.description,
      
   },{where:{id:req.body.id}}).then(()=>{res.redirect('/')})

    
  }

  const viewDepartement = async (req, res)=>{
    const {id} = req.params;
    const departement = await departement.findOne({
      where:{
        id:id
      },
      raw:true
    }).catch(error=>console.log(error))

    res.render('departement', {departement})
  }

  const deleteDepartement = (req, res)=>{
     departement.destroy({
      where:{
         id : req.params.id
      },
    })


    res.redirect('/')
  }

module.exports = {
    allDepartements,departementForm,saveDepartement,editDepartement,updateDapartement,deleteDepartement
}
   
 