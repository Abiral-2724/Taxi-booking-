const userModel = require('../models/user.model') ; 
const userService = require('../services/user.service.js') ; 
const {validationResult}  = require('express-validator') ;


module.exports.registerUser = async (req,res,next) => {
    const errors  = validationResult(req) ; 
    console.log(req.body) ;
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()}) ;
    }

    const {fullname,email ,password } = req.body ;
    const user_exits= await userModel.findOne({email}) ;
    if(user_exits){
        return res.status(400).json({
            message: "User already exists with this email",
            success: false,
        });
    }
    const hashedPassword = await userModel.hashPassword(password) ; 

    const user = await userService.createUser({
        firstname:fullname.firstname ,
        lastname:fullname.lastname ,
        email ,
        password:hashedPassword ,
        

    })

    const token = user.generateAuthToken() ; 

    res.status(201).json({token ,user}) ;


}

module.exports.loginUser = async (req,res ,next) => {
    const errors  = validationResult(req) ; 
    console.log(req.body) ;
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()}) ;
    }

    const {email ,password} = req.body ; 
    // user ko serach karne prr password by default nahi aaye ga ,isleiye select ka use kiya ha
    const user = await userModel.findOne({email}).select('password') ; 

    if(!user){
        return res.status(401).json({message : 'Invalid email or password'}) ;

    }

    const isMatch = await user.comparePassword(password) ; 

    if(!isMatch){
        return res.status(401).json({message : 'Invalid email or password'}) ;
    }

    const token = user.generateAuthToken() ;

    res.status(200).json({token ,user}) ; 

}