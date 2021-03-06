module.exports = {
  name: 'gamer',
  aliases: [],
  ownersOnly: false,
  guildOnly: true,
  requireArgs: false,
  deleteCommand: false,
  cooldown: 10,
  disabled: false,
  messageExecute: async (message, args) => {
    gameID = "699660460546588812"
    // role = message.guild.roles.cache.find(r => r.id == gameID)

    if(message.member.roles.cache.has(gameID)) {
      message.member.roles.remove(gameID).then(
        message.channel.send({
          "embed" : {
            "description" : "You won't receive game notifications anymore",
            "color" : 15105570
          }
        })
      )
    }
    else {
      message.member.roles.add(gameID).then(
        message.channel.send({
          "embed" : {
            "description" : "You'll now receive game notifications",
            "color" : 15105570
          }
        })
      )
    }
  }
};
