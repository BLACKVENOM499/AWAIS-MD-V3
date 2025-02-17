const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "💻",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*𝐒𝐘𝐒𝐓𝐄𝐌 💻*


*𝐔𝐏𝐓𝐈𝐌𝐄*  ${runtime(process.uptime())}

*𝐑𝐀𝐌 𝐔𝐒𝐀𝐆𝐄* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

*𝐇𝐎𝐒𝐓 𝐍𝐀𝐌𝐄* ${os.hostname()}

*𝐎𝐖𝐍𝐄𝐑* *𝐀𝐊𝐈𝐍𝐃𝐔*`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
