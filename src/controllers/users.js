const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/users')

const getAdmin = (req, res) =>{

}

const login = (req, res) =>{
    User.findOne({email:req.body.email}, (err, result)=>{
        if(err){
            res.send('Se ha producido un error')
        }else{
            if(result){
                //valida usuario y contraseña
                if(bcrypt.compareSync(req.body.password, result.password)){
                    //genera token
                    jwt.sign({user:result}, 'secret-key', (err, token) =>{
                        res.send({token:token})
                    })
                }else{
                    res.send('Contraseña incorrecta')
                }
            }else{
                res.send('No existe el usuario')
            }
        }
    })
}

const register = (req, res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    user.save((err, result)=>{
        if(err){
            res.send('Se ha producido un error')
        }else{
            res.send('Registro ok')
        }
    })
}

module.exports = {
    getAdmin,
    login,
    register
}