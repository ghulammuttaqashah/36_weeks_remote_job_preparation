const {create,find,deleteUser,updateUser,loginUser}=require('../controllers/userController');
const validate=require('../middleware/validate')
const {userSchema,userSchemaLogin}=require('../validation/userValidation');
const {authenticate} = require('../middleware/authenticate');
const express =require('express');
const router=express.Router();

router.post('/register',validate(userSchema),create);
router.post('/login',validate(userSchemaLogin),loginUser);
router.get('/',authenticate,find)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',validate(userSchema),updateUser)

module.exports=router;