const { fetchJson } = require("../lib/functions");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require('axios');
const { cmd, commands } = require("../command");
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');
const apilink = 'https://www.dark-yasiya-api.site'
const apkdl = require('../lib/apkdl')

cmd({
  pattern: 'insta',
  alias: ["ig"],
  desc: "Download Instagram videos.",
  react: '🎥',
  category: "download",
  filename: __filename
}, async (_0x386562, _0x1b4817, _0x2d5654, {
  from: _0x2b1245,
  quoted: _0x35994d,
  q: _0x133e89,
  reply: _0x1bd856
}) => {
  try {
    // Validate URL
    if (!_0x133e89 || !/^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\//.test(_0x133e89)) {
      return _0x2d5654.reply("Please provide a valid Instagram link.");
    }
    
    _0x2d5654.react('⬇️');

    // Fetch video data
    let _0x46b060 = await igdl(_0x133e89);
    if (!_0x46b060.data || _0x46b060.data.length === 0) {
      return _0x2d5654.reply("No videos found for the provided link.");
    }

    // Send each video
    for (let video of _0x46b060.data) {
      if (!video.url) continue; // Skip if URL is missing
      _0x2d5654.react('⬆️');
      await _0x386562.sendMessage(_0x2b1245, {
        video: { url: video.url },
        mimetype: "video/mp4",
        caption: "> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*"
      }, { quoted: _0x1b4817 });
    }

    _0x2d5654.react('✅');
  } catch (error) {
    console.error(error);
    _0x2d5654.reply("An error occurred while processing your request.");
  }
});

cmd({
    pattern: "mediafire",
    alias: ["mf","mfire"],
    react: "🔥",
    desc: "Mediafire Link Dawnload",
    category: "download",
    use: '.mfire < mediafire url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me mediafire url");
  if(!q.includes('mediafire.com')) return await reply("This url is invalid");
  
const mfire = await fetchJson(`${apilink}/download/mfire?url=${q}`);
  
const msg = `
╭═════════════════○
│🔥*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃 MEDIAFIRE DOWNLOADER*🔥
╰═════════════════○
═════════════════○
╭═════════════════○
│ ℹ️ *𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃* 
│
│🌀 ⦁ *File Name* - ${mfire.result.fileName}
│📚 ⦁ *File Size* - ${mfire.result.size}
│⏳ ⦁ *Upload Date and Time* - ${mfire.result.date}
╰═════════════════○

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*
`
  
// SEND DETAILS
await conn.sendMessage( from, { image: { url: 'https://i.ibb.co/dPw1fHD/mfire.jpg' }, caption: msg }, { quoted: mek });

// SEND FILE
await conn.sendMessage(from, { document: { url: mfire.result.dl_link }, mimetype: mfire.result.fileType , fileName: mfire.result.fileName, caption: mfire.result.fileName }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply('This url type is not working !!')
}
})

cmd({
    pattern: "xvdl",
    alias: ["xvdl","xvdown"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("Please give me few word !")
    
const xv_list = await fetchJson(`${apilink}/search/xvideo?q=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
╭═════════════════○
│*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃 XVIDEO DOWNLOADER 🔞*
╰═════════════════○
═════════════════○
╭═════════════════○
│ *ℹ️ 𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃* 
│
│🕯️ ⦁ *Title* - ${xv_info.result.title}
│👁️ ⦁ *Views* - ${xv_info.result.views}
│🌀 ⦁ *Like* - ${xv_info.result.like}
│🏷️ ⦁ *Deslike* - ${xv_info.result.deslike}
│📚 ⦁ *Size* - ${xv_info.result.size}
╰═════════════════○

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*
`


await conn.sendMessage( from, { image: { url: xv_info.result.image || '' }, caption: msg }, { quoted: mek })

// XVIDEO
await conn.sendMessage(from, { video: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });


} catch (error) {
console.log(error)
reply(error)
}
})

// download apk whatsapp

cmd({
    pattern: "apkdl",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: 'Need apk link...' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let listdata = `📚 Name : ${data.name}
📦 Developer : ${data.package}
⬆️ Last update : ${data.lastup}
📥 Size : ${data.size}`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: mek })
//if (data.size.includes('GB')) return await conn.sendMessage(from , { text: 'File size is too big...' }, { quoted: mek } )
//if (data.size.includes('MB') && data.size.replace(' MB','') > config.MAX_SIZE) return await conn.sendMessage(from , { text: 'File size is too big...' }, { quoted: mek } )
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('ERROR !!')
    console.log(e)
}
})
