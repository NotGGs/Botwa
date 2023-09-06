
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Ind🇮🇩  : *Donate Bg 😁*
Eng🇬🇧 : *Donate Bro 😁*

▢ *DANA*
• *Nomor :* 0895388290404
▢ *OVO*
• *Nomor :* 0895388290404

▢ *YOUTUBE*
• _Subscribe My Channel_
• https://youtube.com/@GREGOR1US

▢ *GITHUB*
• _Free Script Bot Whatsapp_
• https://github.com/NotGGs
`
let img = 'https://telegra.ph/file/c3b6882ed6aee6b409198.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
