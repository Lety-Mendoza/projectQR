const{Router} = require('express');
const router = Router();



const modelDatos = require('../models/datosGenerales');

router.get('/', async (require,res)=>{
    const datos = await modelDatos.find();
    res.json(datos);
    //res.send("consulta realizada");
});



router.post('/', async (require,res)=>{
    const {nombre, a_Paterno, a_Materno, celular, sexo, dia, mes, año, email, contraseña} = require.body;
    const newDato = new modelDatos({nombre, a_Paterno, a_Materno, celular, sexo, dia, mes, año, email, contraseña});
    console.log(newDato);

    await newDato.save(); 
    //console.log(require.body);
    res.json(newDato);
   
   // res.send("datos agregados");
});

module.exports = router; //Exportación del módulo
