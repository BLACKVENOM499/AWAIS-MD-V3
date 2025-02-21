/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923096287432 ♻️
© Copy coder alert ⚠
*/
const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const {
  fetchJson
} = require("../lib/functions");
const {
  ytsearch,
  ytmp3
} = require('@dark-yasiya/yt-dl.js');
const axios = require("axios");
async function ytmp4(_0x2350f4, _0x1e813d) {
  try {
    if (!_0x2350f4 || !_0x1e813d) {
      throw new Error("url and format parameters are required.");
    }
    const _0x155531 = parseInt(_0x1e813d.replace('p', ''), 0xa);
    const _0x1ae345 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x155531,
      'url': _0x2350f4
    };
    const _0xb9e379 = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': 'https://loader.to',
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x58e175 = await axios.get('https://ab.cococococ.com/ajax/download.php', {
      'params': _0x1ae345,
      'headers': _0xb9e379
    });
    const _0x3cd985 = _0x58e175.data.id;
    const _0x3cc28c = async () => {
      const _0x57899a = {
        'id': _0x3cd985
      };
      try {
        const _0x31ac54 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0x57899a,
          'headers': _0xb9e379
        });
        const {
          progress: _0x528330,
          download_url: _0x2eecb3,
          text: _0x5c5bdf
        } = _0x31ac54.data;
        return _0x5c5bdf === "Finished" ? _0x2eecb3 : (await new Promise(_0x396736 => setTimeout(_0x396736, 0x3e8)), _0x3cc28c());
      } catch (_0x265b2d) {
        throw new Error("Error in progress check: " + _0x265b2d.message);
      }
    };
    return await _0x3cc28c();
  } catch (_0x310c4b) {
    console.error("Error:", _0x310c4b);
    return {
      'error': _0x310c4b.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x170001) {
  const _0x50fae6 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x1157a3 = _0x170001.match(_0x50fae6);
  return _0x1157a3 ? _0x1157a3[0x1] : null;
}
function convertYouTubeLink(_0xa9eec5) {
  const _0x434739 = extractYouTubeId(_0xa9eec5);
  if (_0x434739) {
    return "https://www.youtube.com/watch?v=" + _0x434739;
  }
  return _0xa9eec5;
}
cmd({
  'pattern': "song",
  'alias': 'play',
  'desc': "To download songs.",
  'react': '🎵',
  'category': 'download',
  'filename': __filename
}, async (_0xa257b4, _0x2f727a, _0x359db2, {
  from: _0x20dbcc,
  quoted: _0x54a89a,
  body: _0x3e7e0f,
  isCmd: _0x48a250,
  command: _0x77dc65,
  args: _0xff6f6,
  q: _0x5986de,
  isGroup: _0x3d307b,
  sender: _0x1679f4,
  senderNumber: _0x42db90,
  botNumber2: _0x211709,
  botNumber: _0xd31293,
  pushname: _0x2168a0,
  isMe: _0x55269c,
  isOwner: _0x15f737,
  groupMetadata: _0xc4a470,
  groupName: _0x395c79,
  participants: _0x14f2b2,
  groupAdmins: _0x29efac,
  isBotAdmins: _0x1e6418,
  isAdmins: _0x2bb61a,
  reply: _0x5bb2a2
}) => {
  try {
    if (!_0x5986de) {
      return _0x5bb2a2("Please give me a URL or title.");
    }
    _0x5986de = convertYouTubeLink(_0x5986de);
    const _0x5ec17c = await yts(_0x5986de);
    const _0x54a5b7 = _0x5ec17c.videos[0x0];
    const _0x1ae271 = _0x54a5b7.url;
    let _0x301438 = "\n*SOBI-MD-MUSIC*\n❍ *ᴛɪᴛʟᴇ :* " + _0x54a5b7.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x54a5b7.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x54a5b7.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x54a5b7.ago + "\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧*\n\n*1*     ┃  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\nSOBIA MD ✻\n";
    const _0x26c9a8 = await _0xa257b4.sendMessage(_0x20dbcc, {
      'image': {
        'url': _0x54a5b7.thumbnail
      },
      'caption': _0x301438,
      'contextInfo': {
        'mentionedJid': ["923251869133@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363352224008317@newsletter",
          'newsletterName': "SOBIA MD✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "SOBIA MD",
          'body': "SOBIA MD",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/SILENTLOVER40",
          'thumbnailUrl': "https://i.ibb.co/mbGXCfd/Manul-Ofc-X.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x2f727a
    });
    const _0x1af136 = _0x26c9a8.key.id;
    _0xa257b4.ev.on('messages.upsert', async _0x4c516c => {
      const _0x54fc28 = _0x4c516c.messages[0x0];
      if (!_0x54fc28.message) {
        return;
      }
      const _0x3d50b8 = _0x54fc28.message.conversation || _0x54fc28.message.extendedTextMessage?.['text'];
      const _0xab2183 = _0x54fc28.key.remoteJid;
      const _0x4a15e2 = _0x54fc28.message.extendedTextMessage && _0x54fc28.message.extendedTextMessage.contextInfo.stanzaId === _0x1af136;
      if (_0x4a15e2) {
        await _0xa257b4.sendMessage(_0xab2183, {
          'react': {
            'text': '⬇️',
            'key': _0x54fc28.key
          }
        });
        if (_0x3d50b8 === '1') {
          const _0x42f451 = await ytmp3(_0x1ae271);
          await _0xa257b4.sendMessage(_0xab2183, {
            'react': {
              'text': '⬆️',
              'key': _0x54fc28.key
            }
          });
          await _0xa257b4.sendMessage(_0xab2183, {
            'audio': {
              'url': _0x42f451.download.url
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'mentionedJid': ["923251869133@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363352224008317@newsletter",
                'newsletterName': "SOBIA MD✻",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "SOBIA MD",
                'body': "SOBIA MD",
                'mediaType': 0x1,
                'sourceUrl': _0x54a5b7.url,
                'thumbnailUrl': _0x54a5b7.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x54fc28
          });
          await _0xa257b4.sendMessage(_0xab2183, {
            'react': {
              'text': '✅',
              'key': _0x54fc28.key
            }
          });
        } else {
          if (_0x3d50b8 === '2') {
            const _0x429e05 = await ytmp3(_0x1ae271);
            await _0xa257b4.sendMessage(_0xab2183, {
              'react': {
                'text': '⬆️',
                'key': _0x54fc28.key
              }
            });
            await _0xa257b4.sendMessage(_0xab2183, {
              'document': {
                'url': _0x429e05.download.url
              },
              'mimetype': "audio/mp3",
              'fileName': _0x54a5b7.title + ".mp3",
              'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*\n ",
              'contextInfo': {
                'mentionedJid': ['923251869133@s.whatsapp.net'],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363352224008317@newsletter",
                  'newsletterName': "SOBIA MD",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "SOBIA-MD",
                  'body': "SOBIA MD",
                  'mediaType': 0x1,
                  'sourceUrl': _0x54a5b7.url,
                  'thumbnailUrl': _0x54a5b7.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x54fc28
            });
            await _0xa257b4.sendMessage(_0xab2183, {
              'react': {
                'text': '✅',
                'key': _0x54fc28.key
              }
            });
            await _0xa257b4.sendMessage(_0xab2183, {
              'delete': _0x26c9a8.key
            });
          }
        }
      }
    });
  } catch (_0x167ef6) {
    console.log(_0x167ef6);
    _0x5bb2a2('' + _0x167ef6);
  }
});
cmd({
  'pattern': "video",
  'desc': "To download videos.",
  'react': '🎥',
  'category': 'download',
  'filename': __filename
}, async (_0x44d9c0, _0xae03c, _0x1a31e8, {
  from: _0xb04429,
  quoted: _0x5f235f,
  body: _0x2c13f6,
  isCmd: _0x4e8f66,
  command: _0x59e310,
  args: _0x52d46e,
  q: _0x3b9d7e,
  isGroup: _0x4fce36,
  sender: _0x55f035,
  senderNumber: _0x1d989c,
  botNumber2: _0x52a196,
  botNumber: _0x2e3a4c,
  pushname: _0x22b715,
  isMe: _0xa836cb,
  isOwner: _0x3ed134,
  groupMetadata: _0x1aeec0,
  groupName: _0x55257b,
  participants: _0x1fdb3e,
  groupAdmins: _0x151fd5,
  isBotAdmins: _0x564c40,
  isAdmins: _0x4480f0,
  reply: _0xa6d47f
}) => {
  try {
    if (!_0x3b9d7e) {
      return _0xa6d47f("Please give me a URL or title.");
    }
    _0x3b9d7e = convertYouTubeLink(_0x3b9d7e);
    const _0xd36994 = await yts(_0x3b9d7e);
    const _0x5ccecb = _0xd36994.videos[0x0];
    const _0x41023c = _0x5ccecb.url;
    let _0x2405c4 = "\n*SOBIA-MD-VIDEO*\n " + _0x5ccecb.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x5ccecb.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x5ccecb.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x5ccecb.ago + "\n\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> SOBIA-MD ✻\n";
    const _0x12c73b = await _0x44d9c0.sendMessage(_0xb04429, {
      'image': {
        'url': _0x5ccecb.thumbnail
      },
      'caption': _0x2405c4,
      'contextInfo': {
        'mentionedJid': ["923251869133@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363352224008317@newsletter',
          'newsletterName': "SILENT-SOBX-MD ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "SOBIA BUTT",
          'body': "SOBIA MD",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/SILENTLOVER40",
          'thumbnailUrl': "https://i.ibb.co/mbGXCfd/Manul-Ofc-X.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0xae03c
    });
    const _0x109c9b = _0x12c73b.key.id;
    _0x44d9c0.ev.on("messages.upsert", async _0x9cb8a6 => {
      const _0x3623ef = _0x9cb8a6.messages[0x0];
      if (!_0x3623ef.message) {
        return;
      }
      const _0x38eb1a = _0x3623ef.message.conversation || _0x3623ef.message.extendedTextMessage?.['text'];
      const _0x1eb55b = _0x3623ef.key.remoteJid;
      const _0x4fc52a = _0x3623ef.message.extendedTextMessage && _0x3623ef.message.extendedTextMessage.contextInfo.stanzaId === _0x109c9b;
      if (_0x4fc52a) {
        await _0x44d9c0.sendMessage(_0x1eb55b, {
          'react': {
            'text': '⬇️',
            'key': _0x3623ef.key
          }
        });
        if (_0x38eb1a === '1.1') {
          const _0x34f72d = await ytmp4('' + _0x41023c, '360p');
          await _0x44d9c0.sendMessage(_0x1eb55b, {
            'delete': _0x12c73b.key
          });
          await _0x44d9c0.sendMessage(_0x1eb55b, {
            'react': {
              'text': '⬆️',
              'key': _0x3623ef.key
            }
          });
          await _0x44d9c0.sendMessage(_0x1eb55b, {
            'video': {
              'url': _0x34f72d
            },
            'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*\n",
            'contextInfo': {
              'mentionedJid': ['923251869133@s.whatsapp.net'],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363352224008317@newsletter",
                'newsletterName': "SOBIA BUTT ✻",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "SOBIA BUTT ",
                'body': "SOBIA MD",
                'mediaType': 0x1,
                'sourceUrl': _0x5ccecb.url,
                'thumbnailUrl': _0x5ccecb.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x3623ef
          });
          await _0x44d9c0.sendMessage(_0x1eb55b, {
            'react': {
              'text': '✅',
              'key': _0x3623ef.key
            }
          });
        } else {
          if (_0x38eb1a === "1.2") {
            const _0x139ef9 = await ytmp4('' + _0x41023c, '480');
            await _0x44d9c0.sendMessage(_0x1eb55b, {
              'delete': _0x12c73b.key
            });
            await _0x44d9c0.sendMessage(_0x1eb55b, {
              'react': {
                'text': '⬆️',
                'key': _0x3623ef.key
              }
            });
            await _0x44d9c0.sendMessage(_0x1eb55b, {
              'video': {
                'url': _0x139ef9
              },
              'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*\n",
              'contextInfo': {
                'mentionedJid': ["923251869133@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363352224008317@newsletter',
                  'newsletterName': "sᴏʙɪᴀ ᴍᴅ",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "sᴏʙɪ-ᴍᴅ",
                  'body': "Sᴏʙɪᴀ ᴍᴅ",
                  'mediaType': 0x1,
                  'sourceUrl': _0x5ccecb.url,
                  'thumbnailUrl': _0x5ccecb.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x3623ef
            });
            await _0x44d9c0.sendMessage(_0x1eb55b, {
              'react': {
                'text': '✅',
                'key': _0x3623ef.key
              }
            });
          } else {
            if (_0x38eb1a === "1.3") {
              const _0x2e96d9 = await ytmp4('' + _0x41023c, "720");
              await _0x44d9c0.sendMessage(_0x1eb55b, {
                'delete': _0x12c73b.key
              });
              await _0x44d9c0.sendMessage(_0x1eb55b, {
                'react': {
                  'text': '⬆️',
                  'key': _0x3623ef.key
                }
              });
              await _0x44d9c0.sendMessage(_0x1eb55b, {
                'video': {
                  'url': _0x2e96d9
                },
                'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ᴍᴅ*\n",
                'contextInfo': {
                  'mentionedJid': ["923251869133@s.whatsapp.net"],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363352224008317@newsletter",
                    'newsletterName': "Sᴏʙɪᴀ ᴍᴅ",
                    'serverMessageId': 0x3e7
                  },
                  'externalAdReply': {
                    'title': "sᴏʙɪᴀ ᴍᴅ",
                    'body': "ᴏʙɪᴀ ᴍᴅ",
                    'mediaType': 0x1,
                    'sourceUrl': _0x5ccecb.url,
                    'thumbnailUrl': _0x5ccecb.thumbnail,
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x3623ef
              });
              await _0x44d9c0.sendMessage(_0x1eb55b, {
                'react': {
                  'text': '✅',
                  'key': _0x3623ef.key
                }
              });
            } else {
              if (_0x38eb1a === '1.4') {
                const _0x2ddc2c = await ytmp4('' + _0x41023c, '1080');
                await _0x44d9c0.sendMessage(_0x1eb55b, {
                  'delete': _0x12c73b.key
                });
                await _0x44d9c0.sendMessage(_0x1eb55b, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x3623ef.key
                  }
                });
                await _0x44d9c0.sendMessage(_0x1eb55b, {
                  'video': {
                    'url': _0x2ddc2c
                  },
                  'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*\n"
                }, {
                  'quoted': _0x3623ef
                });
                await _0x44d9c0.sendMessage(_0x1eb55b, {
                  'react': {
                    'text': '✅',
                    'key': _0x3623ef.key
                  }
                });
              } else {
                if (_0x38eb1a === '2.1') {
                  const _0x5acb6b = await ytmp4('' + _0x41023c, "360");
                  await _0x44d9c0.sendMessage(_0x1eb55b, {
                    'delete': _0x12c73b.key
                  });
                  await _0x44d9c0.sendMessage(_0x1eb55b, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x3623ef.key
                    }
                  });
                  await _0x44d9c0.sendMessage(_0x1eb55b, {
                    'document': {
                      'url': _0x5acb6b
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x5ccecb.title + ".mp4",
                    'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*\n",
                    'contextInfo': {
                      'mentionedJid': ["923251869133@s.whatsapp.net"],
                      'groupMentions': [],
                      'forwardingScore': 0x1,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363352224008317@newsletter",
                        'newsletterName': "Sᴏʙɪᴀ ᴍᴅ",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "sᴏʙɪᴀ ᴍᴅ",
                        'body': "Sᴏʙɪᴀ ʙᴜᴛᴛ",
                        'mediaType': 0x1,
                        'sourceUrl': _0x5ccecb.url,
                        'thumbnailUrl': _0x5ccecb.thumbnail,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0x3623ef
                  });
                  await _0x44d9c0.sendMessage(_0x1eb55b, {
                    'react': {
                      'text': '✅',
                      'key': _0x3623ef.key
                    }
                  });
                } else {
                  if (_0x38eb1a === "2.2") {
                    const _0x11606f = await ytmp4('' + _0x41023c, "480");
                    await _0x44d9c0.sendMessage(_0x1eb55b, {
                      'delete': _0x12c73b.key
                    });
                    await _0x44d9c0.sendMessage(_0x1eb55b, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x3623ef.key
                      }
                    });
                    await _0x44d9c0.sendMessage(_0x1eb55b, {
                      'document': {
                        'url': _0x11606f
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x5ccecb.title + ".mp4",
                      'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*\n",
                      'contextInfo': {
                        'mentionedJid': ["923251869133@s.whatsapp.net"],
                        'groupMentions': [],
                        'forwardingScore': 0x1,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': "120363352224008317@newsletter",
                          'newsletterName': "sᴏʙɪᴀ ᴍᴅ",
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': 'sᴏʙɪᴀ',
                          'body': "sᴏʙɪᴀ ᴍᴅ",
                          'mediaType': 0x1,
                          'sourceUrl': _0x5ccecb.url,
                          'thumbnailUrl': _0x5ccecb.thumbnail,
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    }, {
                      'quoted': _0x3623ef
                    });
                    await _0x44d9c0.sendMessage(_0x1eb55b, {
                      'react': {
                        'text': '✅',
                        'key': _0x3623ef.key
                      }
                    });
                  } else {
                    if (_0x38eb1a === "2.3") {
                      const _0x49fb01 = await ytmp4('' + _0x41023c, "720");
                      await _0x44d9c0.sendMessage(_0x1eb55b, {
                        'delete': _0x12c73b.key
                      });
                      await _0x44d9c0.sendMessage(_0x1eb55b, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x3623ef.key
                        }
                      });
                      await _0x44d9c0.sendMessage(_0x1eb55b, {
                        'document': {
                          'url': _0x49fb01
                        },
                        'mimetype': 'video/mp4',
                        'fileName': _0x5ccecb.title + ".mp4",
                        'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*\n",
                        'contextInfo': {
                          'mentionedJid': ["923251869133@s.whatsapp.net"],
                          'groupMentions': [],
                          'forwardingScore': 0x1,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': "120363352224008317@newsletter",
                            'newsletterName': "SOBIA MD",
                            'serverMessageId': 0x3e7
                          },
                          'externalAdReply': {
                            'title': "SOBIA BUTT ",
                            'body': "SOBIA BUTT",
                            'mediaType': 0x1,
                            'sourceUrl': _0x5ccecb.url,
                            'thumbnailUrl': _0x5ccecb.thumbnail,
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      }, {
                        'quoted': _0x3623ef
                      });
                      await _0x44d9c0.sendMessage(_0x1eb55b, {
                        'react': {
                          'text': '✅',
                          'key': _0x3623ef.key
                        }
                      });
                    } else {
                      if (_0x38eb1a === "2.4") {
                        const _0x1633d6 = await ytmp4('' + _0x41023c, "1080");
                        await _0x44d9c0.sendMessage(_0x1eb55b, {
                          'delete': _0x12c73b.key
                        });
                        await _0x44d9c0.sendMessage(_0x1eb55b, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x3623ef.key
                          }
                        });
                        await _0x44d9c0.sendMessage(_0x1eb55b, {
                          'document': {
                            'url': _0x1633d6
                          },
                          'mimetype': 'video/mp4',
                          'fileName': _0x5ccecb.title + ".mp4",
                          'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ-ʙᴜᴛᴛ*\n",
                          'contextInfo': {
                            'mentionedJid': ["923251869133@s.whatsapp.net"],
                            'groupMentions': [],
                            'forwardingScore': 0x1,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': "120363352224008317@newsletter",
                              'newsletterName': 'SOBIA-MD',
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': 'SOBIA-MD',
                              'body': 'SOBIA-MD',
                              'mediaType': 0x1,
                              'sourceUrl': _0x5ccecb.url,
                              'thumbnailUrl': _0x5ccecb.thumbnail,
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        }, {
                          'quoted': _0x3623ef
                        });
                        await _0x44d9c0.sendMessage(_0x1eb55b, {
                          'react': {
                            'text': '✅',
                            'key': _0x3623ef.key
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x235392) {
    console.log(_0x235392);
    _0xa6d47f('' + _0x235392);
  }
});
cmd({
  'pattern': "yta",
  'alias': "ytmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4082ec, _0x418557, _0x44bbb3, {
  from: _0x8848c0,
  q: _0x146c87,
  reply: _0x5269c9
}) => {
  try {
    if (!_0x146c87) {
      return await _0x5269c9("*Need a YouTube URL!*");
    }
    const _0x33b35c = await fetchJson("https://api.giftedtech.my.id/api/download/ytaud?apikey=gifted&url=" + _0x146c87);
    const _0xe15cad = _0x33b35c.result.download_url;
    await _0x4082ec.sendMessage(_0x8848c0, {
      'audio': {
        'url': _0xe15cad
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x418557
    });
  } catch (_0xe1b1ba) {
    console.log("First attempt failed:", _0xe1b1ba);
    try {
      const _0x4adca5 = await dlyta(_0x146c87);
      await _0x4082ec.sendMessage(_0x8848c0, {
        'audio': {
          'url': _0x4adca5.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x418557
      });
    } catch (_0x5d778e) {
      console.log("Second attempt failed:", _0x5d778e);
      await _0x5269c9("*Failed to process the request. Please try again later!*");
    }
  }
});
