"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "intro", reaction: "👍", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*😎* 👋 \n\n ' + " 💀 HELLOW FRIEND DON'T RUN THIS IS HANS MD THE SIMPLE BOT CREATED BY 😎🤏 HANSTZ FOLLOW MY WHATSAPP CHANNEL 😎 👉https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31 ✌️ THANKS";
    let d = '                                                                           Hanstz is typing.......😎✨';
    let varmess = z + d;
    var mp4 ='https://files.catbox.moe/l1i9o4.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
