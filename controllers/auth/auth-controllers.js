const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

//register
const register = async(req,res)=>{
    const {username,email,password} = req.body;

    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'Some went wrong!',
        });
    }
}

//login
const login = async(req,res)=>{

    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'Some went wrong!',
        });
    }
}