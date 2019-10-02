const db = require('quick.db')

module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('`ROLLERİ_YÖNET` yetkisine sahip değilsin!')
  if (!args.join(" ").trim()) return message.channel.send('')
  

  //

  db.set(`autoRole_${message.guild.id}`, args.join(" ").trim()).then(otorol => {
    if (!message.guild.roles.find(`name`, otorol)) return message.channel.send("Rol bulunamadı")
      message.channel.send(`Otorol Rolü Başarıyla **${otorol}** olarak ayarlandı!`)
    
  })
  
}
module.exports.help = {
  name:"otorol",
  description:"Otomatik rol ayarlar",
  usage:"otorol <rol-ismi>"
}
module.exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
   permLevel: 0
}