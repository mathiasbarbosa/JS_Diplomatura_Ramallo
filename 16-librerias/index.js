

const qr = require('qrcode')

const data = 'https://www.example.com'
const canvas = document.querySelector('#canvas')

qr.toCanvas(canvas,'cualquier cosa que queramos', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('salio todo bien');
})