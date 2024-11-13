const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴅ-ɪs*\n ```' +8000000700+ '``` *ᴍ/s*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)


