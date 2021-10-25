try {
let botonGoBack = document.querySelector('#goBack')
botonGoBack.addEventListener('click', goback)
function goback(){
  window.location.replace('http://localhost:5000/')}
} catch (error) {
  console.log('esto es por utilizar solo un archivo para las dos vistas')
}
try {
 let botonGoProducts = document.querySelector('#goProducts')
botonGoProducts.addEventListener('click', goProducts)
function goProducts(){
  window.location.replace('http://localhost:5000/productos')}
} catch (error) {
   console.log('esto es por utilizar solo un archivo para las dos vistas')
}






