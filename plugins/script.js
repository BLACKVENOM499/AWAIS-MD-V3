cmd({
  'pattern': "ytmp3",
  'alias': "ytsong",
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (conn, mek, m, { from, isOwner, quoted, reply, q }) => {
  try {
    // Check if message contains a valid URL or title
    if (!q) {
      return reply("Please give me a URL or title.");
    }

    
    const searchResults = await yts(q);
    const video = searchResults.videos[0]; // Get the first video

    // Extract video information
    const videoUrl = video.url;
    const videoThumbnail = video.thumbnail;
    const videoTitle = video.title;
    const videoDuration = video.timestamp;
    const videoViews = video.views;
    const videoUploadTime = video.ago;

    // Prepare the message to send
    let messageText = `
   ┏┻━━━━━━━━━━━━━
   ┃*ᴍᴀʟᴀᴋᴀ-ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ*
   ┗━━━━━━━━━━━━━━
   ╭────────────────❖
   │ ℹ️ *MALAKA-MD* 
   │
   │☍ ⦁ *Title:* ${video.title} 
   │☍ ⦁ *Duration:* ${video.timestamp}
   │☍ ⦁ *Views:* ${video.views}   
   │☍ ⦁ *Uploaded On:* ${video.ago} 
   ╰────────────────❖
   ❖──────────────────❖
   ╭──────────────────❖
   │ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢
   │
   │ *_1_*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ 🎶
   │──────────────────❖
   │ *_2_*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ 📂
⁠⁠⁠⁠   ╰──────────────────❖
  © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ . . . 👩‍💻`;

    // Send the message with the thumbnail and download options
    const vv = await conn.sendMessage(from, {
      'image': {
        'url': videoThumbnail
      },
      'caption': messageText,
      'contextInfo': {
        'mentionedJid': ["94704243771@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363382823666763@newsletter",
          'newsletterName': "ᴍᴀʟᴀᴋᴀ-ᴍᴅ ",
          'serverMessageId': 999
        },
        'externalAdReply': {
          'title': "MALAKA-MD",
          'body': "ᴍᴀʟᴀᴋᴀ",
          'mediaType': 1,
          'sourceUrl': "https://github.com/Malaka-KG/MALAKA-MD-V1",
          'thumbnailUrl': "https://i.ibb.co/JrdxHSY/3439.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': mek
    });

    const downloadData = await fetchJson(`https://api.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`);
        const downloadUrl = downloadData.result.download_url;

    // Handle the user's reply for download format
            conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        
           
        
          await conn.sendMessage(from, {
            'audio': {
              'url': downloadUrl
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'mentionedJid': ["94704243771@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363382823666763@newsletter',
                'newsletterName': "ᴍᴀʟᴀᴋᴀ-ᴍᴅ ",
                'serverMessageId': 999
              },
              'externalAdReply': {
                'title': "MALAKA-MD",
                'body': "ᴍᴀʟᴀᴋᴀ",
                'mediaType': 1,
                'sourceUrl': videoUrl,
                'thumbnailUrl': videoThumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': mek
          });

          
                 
                        
                        break;  
                       case '2': 
          await conn.sendMessage(from, {
            'document': {
              'url': downloadUrl
            },
            'mimetype': "audio/mpeg",
            'fileName': videoTitle + '.mp3',
            'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ · · ·👨‍💻*\n ",
            'contextInfo': {
              'mentionedJid': ["94704243771@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363382823666763@newsletter',
                'newsletterName': "ᴍᴀʟᴀᴋᴀ-ᴍᴅ ",
                'serverMessageId': 999
              },
              'externalAdReply': {
                'title': "MALAKA-MD",
                'body': "ᴍᴀʟᴀᴋᴀ",
                'mediaType': 1,
                'sourceUrl': videoUrl,
                'thumbnailUrl': videoThumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': mek
          });
          }}});



  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});
