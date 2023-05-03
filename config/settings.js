const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6281998425782'] // no own
global.author = 'AnggaKz' // nama author 
global.packname = 'Bot WhatsApp By AnggaKz' // nama pack sticker
global.namabot = 'Bot Discord' // nama bot mu
global.group = 'https://chat.whatsapp.com/Ly28IB8Fel4JbPS0qCUy2p' // grup mu
global.pic = 'https://telegra.ph/file/fa1096710b07be0460eb5.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
