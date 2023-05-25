const verifyToken = (req, res, next) => {

    const authorization_header = req.headers['authorization']
    if(authorization_header !== undefined){
        const token = authorization_header.split(" ")[1]
        req.token = token
        next()
    }else{
        console.log('no ingreso el token')
    }
    next()
}

exports.verifyToken = verifyToken