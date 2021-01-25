const usuariosCtrl = {};

usuariosCtrl.getUser = (req,res) =>{

    const {id} =  req.query;
    console.log(id);
    res.json({codigo_usuario:id});

}


usuariosCtrl.getUsers = (req, res) => {

    res.json({message:"Hola Mundo"});
};


usuariosCtrl.signin = (req,res)=>{
    
    const {username,passwd,direccion} = req.body;
    if(username==="jc" && passwd==="1234"){
        res.json({code:1,
        message:"Inicio de sesion exitoso"});
    }else{
        res.json({code:2,
            message:"Inicio de sesion Fallido"});
    }
  
    

}

module.exports = usuariosCtrl;