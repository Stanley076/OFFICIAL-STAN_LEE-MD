"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐡𝐞𝐥𝐥𝐨𝐰 𝐭𝐡𝐢𝐬 𝐢𝐬 *ℍ𝔸ℕ𝕊 𝕄𝔻🇹🇿  * \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *hanstz Tech⚠️ *';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/3vkm13.jpeg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="😁"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *HANS MD* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *HANSTZ*'
      let varmess=z+d
      var img='https://files.catbox.moe/3vkm13.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
