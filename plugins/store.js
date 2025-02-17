const {
  updateEnv,
  readEnv
} = require("../lib/database");
const EnvVar = require("../lib/mongodbenv");
const {
  cmd
} = require("../command");
cmd({
  'pattern': "update",
  'alias': ["undefined"],
  'desc': "Check and update environment variables",
  'react': '⚙',
  'category': 'owner',
  'filename': __filename
}, async (_0x337d98, _0x17769d, _0xaaffc5, {
  from: _0x5335ae,
  q: _0x541a61,
  reply: _0x199dc6,
  isOwner: _0x239615
}) => {
  if (!_0x239615) {
    return;
  }
  if (!_0x541a61) {
    return _0x199dc6("🙇‍♂️ *Please provide the environment variable and its new value.* \n\nExample: `.update ALIVE_MSG: hello i am Supun Fernando`");
  }
  const _0xa6b9b6 = _0x541a61.indexOf(':');
  const _0x223210 = _0x541a61.indexOf(',');
  const _0x1def70 = _0xa6b9b6 !== -0x1 ? _0xa6b9b6 : _0x223210;
  if (_0x1def70 === -0x1) {
    return _0x199dc6("🫠 *Invalid format. Please use the format:* `.update KEY:VALUE`");
  }
  const _0x15049e = _0x541a61.substring(0x0, _0x1def70).trim();
  const _0x385ecc = _0x541a61.substring(_0x1def70 + 0x1).trim();
  const _0x402ae9 = _0x385ecc.split(/\s+/).filter(_0x40a0f6 => _0x40a0f6.trim());
  const _0x470cc9 = _0x402ae9.length > 0x1 ? _0x402ae9.slice(0x1).join(" ").trim() : '';
  const _0x451406 = ['public', "private", "groups", 'inbox'];
  const _0x1845bb = _0x451406.includes(_0x470cc9) ? _0x470cc9 : '';
  if (!_0x15049e || !_0x385ecc) {
    return _0x199dc6("🫠 *Invalid format. Please use the format:* `.update KEY:VALUE`");
  }
  if (_0x15049e === "MODE" && !_0x451406.includes(_0x385ecc)) {
    return _0x199dc6("😒 *Invalid mode. Valid modes are: " + _0x451406.join(", ") + '*');
  }
  if (_0x15049e === 'ALIVE_IMG' && !_0x385ecc.startsWith("https://")) {
    return _0x199dc6("😓 *Invalid URL format. PLEASE GIVE ME IMAGE URL*");
  }
  if (_0x15049e === "AUTO_READ_STATUS" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_READ_STATUS. Please use `true` or `false`.*");
  }
  if (_0x15049e === "AUTO_VOICE" && !['true', 'false'].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_VOICE. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'AUTO_STICKER' && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_STICKER. Please use `true` or `false`.*");
  }
  if (_0x15049e === "AUTO_REPLY" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_REPLY. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'AUTO_REACT' && !["true", 'false'].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_REACT. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'HEART_REACT' && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for HEART_REACT. Please use `true` or `false`.*");
  }
  if (_0x15049e === "OWNER_REACT" && !['true', 'false'].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for OWNER_REACT. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'ANTI_BOT' && !['true', "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ANTI_BOT. Please use `true` or `false`.*");
  }
  if (_0x15049e === "ANTI_CALL" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ANTI_CALL. Please use `true` or `false`.*");
  }
  if (_0x15049e === "ANTI_BAD" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ANTI_BAD. Please use `true` or `false`.*");
  }
  if (_0x15049e === "ANTI_LINK" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ANTI_LINK. Please use `true` or `false`.*");
  }
  if (_0x15049e === "ANTI_LINKK" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ANTI_LINKK. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'BAD_NO_BLOCK' && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for BAD_NO_BLOCK. Please use `true` or `false`.*");
  }
  if (_0x15049e === "ALLWAYS_OFFLINE" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ALLWAYS_OFFLINE. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'ALWAYS_RECORDING' && !['true', 'false'].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ALWAYS_RECORDING. Please use `true` or `false`.*");
  }
  if (_0x15049e === "ALWAYS_TYPING" && !['true', "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ALWAYS_TYPING. Please use `true` or `false`.*");
  }
  if (_0x15049e === "AUTO_STATUS_REPLY" && !['true', 'false'].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_STATUS_REPLY. Please use `true` or `false`.*");
  }
  if (_0x15049e === "AUTO_BIO" && !['true', "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_BIO. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'AUTO_READ_CMD' && !["true", 'false'].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_READ_CMD. Please use `true` or `false`.*");
  }
  if (_0x15049e === "CURRENT_STATUS" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for CURRENT_STATUS. Please use `true` or `false`.*");
  }
  if (_0x15049e === "ALWAYS_ONLINE" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for ALWAYS_ONLINE. Please use `true` or `false`.*");
  }
  if (_0x15049e === "PUBLIC_MODE" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for PUBLIC_MODE. Please use `true` or `false`.*");
  }
  if (_0x15049e === "AUTO_REACT_STATUS" && !["true", "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for AUTO_REACT_STATUS. Please use `true` or `false`.*");
  }
  if (_0x15049e === 'DELETEMSGSENDTO' && !['true', "false"].includes(_0x385ecc)) {
    return _0x199dc6("😓 *Invalid value for DELETEMSGSENDTO. Please use `true` or `false`.*");
  }
  try {
    const _0x4e8ace = await EnvVar.findOne({
      'key': _0x15049e
    });
    if (!_0x4e8ace) {
      const _0x13a65b = await EnvVar.find({});
      const _0x526c5d = _0x13a65b.map(_0x2dd511 => _0x2dd511.key + ": " + _0x2dd511.value).join("\n");
      return _0x199dc6("❌ *The environment variable " + _0x15049e + " does not exist.*\n\n*Here are the existing environment variables:*\n\n" + _0x526c5d);
    }
    await updateEnv(_0x15049e, _0x385ecc, _0x1845bb);
    _0x199dc6("✅ *Environment variable updated.*\n\n🗃️ *" + _0x15049e + "* ➠ " + _0x385ecc + " " + (_0x1845bb ? "\n*Mode:* " + _0x1845bb : ''));
  } catch (_0x1e2432) {
    console.error("Error updating environment variable:" + _0x1e2432.message);
    _0x199dc6("🙇‍♂️ *Failed to update the environment variable. Please try again.*" + _0x1e2432);
  }
});
