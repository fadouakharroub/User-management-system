const {
    departement,
    user,
    Sequelize
   } = require("./../models");
   const Op = Sequelize.Op;
   let self = {};
   self.getAll = async (req,res) => {
    try{
     let data = await item.findAll({
      attributes:["id","name","email","password","user_id"],
      include:[
       {
        model:user,
        as:'user',
        attributes:["id","name"]
       }
      ]
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }