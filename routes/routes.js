const { Router } = require('express');
const router = Router();
const fileHandler = require("../handlers/fileHandler.js");

function serverRouter(app){

  app.use("/", router);

  router.get('/', (req, res)=>{
    res.render('ingresoProductos', {title:"ingresar productos"});
  })

  router.get('/productos', async (req, res)=>{
    let latestData = await fileHandler.getAll();
  
    if(latestData.length===0){
      let noProductos = true
      res.render('showProducts', {title:"mostrar productos", noProductos});
    } else {
        let noProductos = false
        res.render('showProducts', {latestData, title:"mostrar productos", noProductos});
  }



})

  router.post('/productos', async (req, res)=>{

      let latestData = await fileHandler.writeFile(req.body);
      let noProductos = false;
      res.render('showProducts', {latestData, title:"mostrar productos", noProductos});

  })
}

module.exports = serverRouter;