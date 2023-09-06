let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ Group : *${groupMetadata.subject}*\n▢ Member : *${participants.length}*${text ? `\n▢ Mensaje : ${text}\n` : ''}\n┌───⊷ *TAG ALL MEMBER*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ 𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘-𝕭𝖔𝖙 ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true
handler.owner = true

export default handler
