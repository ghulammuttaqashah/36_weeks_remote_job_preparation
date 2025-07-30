const {create,find,deleteUser,updateUser}=require('../controllers/userController');
const validate=require('../middleware/validate')
const userSchema=require('../validation/userValidation')
const express =require('express');
const router=express.Router();

router.post('/register',validate(userSchema),create);
router.get('/',find)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',updateUser)

module.exports=router;