const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu2", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╔════  𝙃𝘼𝙉𝙎 𝙈𝘿 𝙉𝙀𝙒 ════─➳
║  ╔════════════─➳
║  ║▸ *𝙢𝙮 𝙤𝙬𝙣𝙚𝙧* : ${s.OWNER_NAME}
   ║▸ *𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙧* : ${nomAuteurMessage} 
╚════════════─➳✨
    ▸ *𝙙𝙖𝙩𝙚 *: ${date}
    ▸ *𝙥𝙧𝙚𝙛𝙞𝙭* : ${s.PREFIXE}
    ▸ *𝙬𝙤𝙧𝙠𝙩𝙮𝙥𝙚* : ${mode} 𝙢𝙤𝙙𝙚
    ▸ *𝙥𝙡𝙪𝙜𝙞𝙣* : ${cm.length} 
    ▸ *𝙧𝙤𝙢* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
    ▸ *𝙧𝙪𝙣𝙣𝙞𝙣𝙜 𝙤𝙣* : ${os.platform()}
    ▸ *𝙩𝙝𝙚𝙢* : *𝙃𝘼𝙉𝙎*

> 𝙃𝘼𝙉𝙎 𝙈𝘿 ✌️ 2025\n${readmore}`;
    
let menuMsg = `

 * 𝙃𝘼𝙉𝙎 𝙈𝘿 ✨ 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 *${readmore}
`;

    for (const cat in coms) {
        menuMsg += ` ╭═════─➳ *${cat}* ❖═════✰`;
        for (const cmd of coms[cat]) {
            menuMsg += `
║😎║ ${cmd}`;
        }
        menuMsg += `
╚══━━━════───➳ \n`
    }

    menuMsg += `> 𝙥𝙤𝙬𝙚𝙧 𝙗𝙮 𝙈𝙍 𝙃𝘼𝙉𝙎𝙏𝙕 
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Hansmd*, déveloper Hans Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Hansmd*, déveloper Hans Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
