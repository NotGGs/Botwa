function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘\nitem1.TEL;waid=62895388290404:62895388290404\nitem1.X-ABLabel:\nJangan Spam\nURL;My Web:t.me/GregoriusSc\nEMAIL;Email Owner:gregoriuscyber@gmail.com\nORG: NOT A BOT + DO NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler