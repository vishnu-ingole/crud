const express= require('express');
const router =express.Router();

const middleware=(req,res,next)=>{
        if( req.body.name ==='shrikant')
        {
                 next()
        }
}
const userController= require('../controller/userController')
router.get('/',userController.getUser);
router.post('/',userController.addUser);

module.exports= router;