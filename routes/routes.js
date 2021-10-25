const { Router } = require('express');
const router = Router();
const fileHandler = require("../handlers/fileHandler.js");

function serverRouter(app){

  app.use("/", router);

  router.get('/', (req, res)=>{
    res.render('ingresoProductos');
  })

  router.get('/productos', async (req, res)=>{
    let latestData = await fileHandler.getAll();
    if(latestData.length===0){latestData=[{alert: "no se encuentran productos"}]}
    res.render('showProducts', {latestData});
  })

  router.post('/productos', async (req, res)=>{

      let latestData = await fileHandler.writeFile(req.body);
      res.render('showProducts', {latestData});

  })
}

module.exports = serverRouter;