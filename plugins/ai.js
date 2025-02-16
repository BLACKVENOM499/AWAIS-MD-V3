const {cmd , commands} = require('../command')
const fetch = require('node-fetch')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const yts = require("yt-search")
const API = `Manul-Official-Key-3467` // මට මැසේජ් එකක් දාල ඉල්ලගන්න...😎❤️ ( +94 74 227 4855 )
cmd({
    pattern: "song",
    alias: ["audio"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎧",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      
        
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*💚🎵 𝐘𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎵💚*
      
> *\`➤ Title\` :* ${data.title}

> *\`➤ Views\` :* ${data.views}

> *\`➤ DESCRIPTION\`:* ${data.description}

> *\`➤ TIME\`:* ${data.timestamp}

> *\`➤ AGO\`:* ${data.ago}

1. Audio 
2. Document

> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*
        `;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        // Fetch Audio from API
                        const audioData = await fetch(`${API}${data.url}`);
                        const audioJson = await audioData.json();
                        const audioDownloadUrl = audioJson.data[2].downloadUrl;  // Assuming you want 128kbps quality

                        // Send Audio
                        await conn.sendMessage(from, { 
                            audio: { url: audioDownloadUrl }, 
                            mimetype: "audio/mpeg", 
                            caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*" 
                        }, { quoted: mek });
                        break;
       
                    case '2':
                        // Fetch Audio from API
                        const docData = await fetch(`${API}${data.url}`);
                        const docJson = await docData.json();
                        const docDownloadUrl = docJson.data[2].downloadUrl;  // Assuming you want 128kbps quality

                        // Send Document
                        await conn.sendMessage(from, { 
                            document: { url: docDownloadUrl },
                            mimetype: "audio/mpeg", 
                            fileName: `${data.title}.mp3`, 
                            caption: "> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚*" 
                        }, { quoted: mek });
                        break;
 
                    default:
                        reply("Invalid option. Please select a valid option 💗");
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('An error occurred while processing your request.');
    }
});
