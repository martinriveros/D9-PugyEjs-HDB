const fs = require('fs');
const path = require('path')

class DataHandler {

  static async getAll(){
    try {
      return JSON.parse(await fs.promises.readFile(`${path.join(__dirname, "../utils/persistentData.json")}`, 'utf-8'))
    } catch (error) {
      console.log('error al leer   ', error)
    }
  }

  static async writeFile(product){
    let products = await DataHandler.getAll();
    product.price = Number(product.price)
    products.push(product)
    products = JSON.stringify(products)
    try {
      await fs.promises.writeFile(`${path.join(__dirname, "../utils/persistentData.json")}`, products)
    } catch (error) {
      console.log('error al escribir   ', error)
    }
    return JSON.parse(products)
  }
}
module.exports = DataHandler