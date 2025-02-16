const {
  cmd,
  commands
} = require("../command");
const {
  igdl
} = require("ruhend-scraper");
cmd({
  'pattern': 'fb',
  'alias': ["facebook", "fbdl"],
  'desc': "To download facebook videos.",
  'category': "download",
  'filename': __filename
}, async (_0x1f7edb, _0x1e628e, _0x1a9d07, {
  from: _0x3cdef4,
  quoted: _0x44af89,
  body: _0x3f590c,
  isCmd: _0x1effef,
  command: _0x2b18eb,
  args: _0x441ecc,
  q: _0x424186,
  isGroup: _0x1457f9,
  sender: _0x2d4c49,
  senderNumber: _0xb75d6,
  botNumber2: _0x2b61ac,
  botNumber: _0x514e2c,
  pushname: _0x43b74e,
  isMe: _0x6ebeb5,
  isOwner: _0xddaa2d,
  groupMetadata: _0x216636,
  groupName: _0x5c5a67,
  participants: _0x215fbd,
  groupAdmins: _0x4c4094,
  isBotAdmins: _0x4d65fd,
  isAdmins: _0x1abe44,
  reply: _0x6ae611
}) => {
  try {
    if (!_0x441ecc[0x0]) {
      return _0x6ae611("*give me a vaild Facebook url*");
    }
    await _0x1a9d07.react('🕒');
    let _0x26ab78;
    try {
      _0x26ab78 = await igdl(_0x441ecc[0x0]);
    } catch (_0x4281f4) {
      return _0x6ae611("*`Error obtaining data.`*");
    }
    let _0x4f1993 = _0x26ab78.data;
    if (!_0x4f1993 || _0x4f1993.length === 0x0) {
      return _0x6ae611("*`No resalt found.`*");
    }
    let _0x29db57;
    try {
      _0x29db57 = _0x4f1993.find(_0x2705bb => _0x2705bb.resolution === "720p (HD)") || _0x4f1993.find(_0x5e35f3 => _0x5e35f3.resolution === "360p (SD)");
    } catch (_0x1caf9f) {
      return _0x6ae611("*`Error data loss.`*");
    }
    if (!_0x29db57) {
      return _0x6ae611("*`No data found.`*");
    }
    await _0x1a9d07.react('✅');
    let _0xaa803e = _0x29db57.url;
    try {
      await _0x1f7edb.sendMessage(_0x1a9d07.chat, {
        'video': {
          'url': _0xaa803e
        },
        'caption': "> 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2",
        'fileName': 'fb.mp4',
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x1a9d07
      });
    } catch (_0x2dd526) {
      return _0x6ae611("*`Error download video.`*");
      await _0x1a9d07.react('❌');
    }
  } catch (_0x4e5989) {
    console.log(_0x4e5989);
    _0x6ae611('' + _0x4e5989);
  }
});
