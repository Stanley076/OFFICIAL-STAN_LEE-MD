"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "💫", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/HANSTZTECH/HANS-MD';
  const img = 'https://files.catbox.moe/3vkm13.jpeg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *HANS_MD .*\n support our channel *by*, https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31

╔═━━━━════──────➳
║╔═━━━━━━━━━━════─━━━━━━─➳
║║ 🗼 *REPOSITORY:* ${data.html_url}
║║ 🌟 *STARS:* ${repoInfo.stars}
║║ 🧧 *FORKS:* ${repoInfo.forks}
║║ 📅 *RELEASE DATE:* ${releaseDate}
║║ 🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
║║ 👨‍💻 *OWNER:* *HANSTZTECH*
║║ 💞 *NAME:* *HANS-MD *
║║ 🥰 *ENJOY TO USE HANS MD *
║╚══━━━━━━━━════─━━━━━━──➳
║╔═━━━━━━━━━━════─━━━━━━──✰ 
║║  ╭───────────────➳
║║  ║✨ MADE BY HANS ✌️😎
║║  ╰───────────────➳
║╚══━━━━━━━━━════─━━━━━━──✰ 
╚══━━━━━━━════───➳
 ✰━━━━━━━━━━━━━━━━━━✰`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
