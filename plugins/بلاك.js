let handler = async (m, { command, text }) => m.reply(`
*💫 اسآل بلاڪ و٘ عٓفـرتو٘ 💫*
  
*السؤال:* ${text}
*الاجابة:* ${['اه','ممكن','في الاغلب اه','ف الاغلب لا','لا','مستحيل'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^بلاك|عفرتو$/i
export default handler

