function validaUsuario (req,res,next){
    const {passwd}= req.body;

    if(passwd==="1234"){
        req.body.direccion = "santiago";
        next();
    }else{
        res.json({message:"Contraseña Incorrecta"});
    }


};

module.exports = validaUsuario;