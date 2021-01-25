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

    res.json({username,passwd,direccion}); 
    

}

module.exports = usuariosCtrl;