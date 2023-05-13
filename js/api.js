const aplicacion = document.querySelector('.container')

const url = 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD'

fetch(url)
.then(res => res.json ())
.then(data=> console.log(data))
.catch(err=> console.log(err))
