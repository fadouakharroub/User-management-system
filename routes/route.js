 const express = require('express');
 const router = express.Router();
 const{allUsers, userForm, saveUser, editUser, updateUser, deleteUser} = require('../controllers/user_ctrl');
 const{allDepartements,  departementForm, saveDepartement} = require('../controllers/departement_ctrl');

 ///ROUTER USER///

 router.get('/', allUsers);
 router.get('/views/create', userForm);
 router.get('/edit/:id', editUser);
 router.post('/update', updateUser);
 router.get('/delete/:id', deleteUser);
router.post('/saveUser', saveUser)

///ROUTER DEPARTEMENT///
router.get('/', allDepartements);
router.get('/views/creer', departementForm);
router.post('/saveDepartement', saveDepartement)


 module.exports = router;