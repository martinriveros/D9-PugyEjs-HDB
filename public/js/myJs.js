function goBack(){
  window.location.replace('http://localhost:5000/')}

function goProducts(){
  window.location.replace('http://localhost:5000/productos')}

try{
  let form = document.querySelector('#formulario')
  let botonSumbit = document.querySelector('#botonSubmit')
  botonSumbit.addEventListener('click', ()=>form.submit())
}catch{
  console.log('un invento...')
}
