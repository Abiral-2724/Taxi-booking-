const express = require('express') ;

const router = express.Router() ;

const {body} = require("express-validator")
const userController = require('../controllers/user.controller.js')
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email') ,
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be of atleast 3 characters long') ,
    body('password').isLength({min:6}).withMessage('Password Must be of Minimum 6 length ')
] ,
userController.registerUser
)

module.exports = router ; 