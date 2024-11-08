import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['alive', 'hansuptime', 'uptime'].includes(cmd)) {

  const uptimeMessage = `*ℍ𝔸ℕ𝕊-𝕄𝔻-𝕀𝕊-𝔸ℂ𝕋𝕀𝕍𝔼 𝔽𝕆ℝ 𝕃𝕀𝕍𝔼 😎*

╔═━━━━━━━━━━━━════──━━━━━━━━─➳
║  𝕋ℍ𝕀𝕊 𝕀𝕊 ℍ𝔸ℕ𝕊-𝕄𝔻-ℕ𝔼𝕎-𝕌ℙ𝔻𝔸𝕋𝔼 2025 😎
║ *${days} ᴅᴀʏ*
║ *${hours} ʜᴏᴜʀ*
║ *${minutes} ᴍɪɴᴜᴛᴇ*
║ *${seconds} sᴇᴄᴏɴᴅ*
║ *ʜᴇʟʟᴏ ${m.pushName} ᴡᴇʟʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ ʜᴀɴs-ᴍᴅ
╚══━━━━━━━━━━━════─━━━━━━━━──➳
`;

  const buttons = [
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "Ping⚡",
          id: `${prefix}ping`
        })
      }
    ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© Hans Tz"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '255756530143',
                  newsletterName: "ℍ𝔸ℕ𝕊-𝕄𝔻",
                  serverMessageId: 143
                }
              }
        }),
      },
    },
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    }
};

export default alive;
