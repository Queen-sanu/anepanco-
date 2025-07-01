const { cmd } = require("../command");
const moment = require("moment");

let botStartTime = Date.now(); // Bot start time record

// ✅ Random Voice Clips List එක
const VOICE_CLIPS = [
    "https://files.catbox.moe/r4r0hz.mp3",
    "https://files.catbox.moe/3pzzgr.mp3",
    "https://files.catbox.moe/qvpa5o.mp3",
    "https://files.catbox.moe/y29b3n.mp3",
    "https://files.catbox.moe/w7yg8f.mp3",
    "https://files.catbox.moe/4rm2fz.mp3",
    "https://files.catbox.moe/gr8wlt.mp3",
    "https://files.catbox.moe/xvue61.mp3",
    "https://files.catbox.moe/uosvov.mp3",
    "https://files.catbox.moe/2vgkwr.mp3",
    "https://files.catbox.moe/gqw8fl.m4a",
    "https://files.catbox.moe/mc5r2s.mp3",
    "https://files.catbox.moe/ck4reh.mp3",
    "https://files.catbox.moe/ypbfyt.mp3",
    "https://files.catbox.moe/75p1zt.mp3",
    "https://files.catbox.moe/rd21pi.mp3",
    "https://files.catbox.moe/ggebie.mp3",
    "https://files.catbox.moe/r4r0hz.mp3"
];

const ALIVE_VIDEO = "https://files.catbox.moe/52py80.mp4"; // මෙතැන valid MP4 video link එකක් දාන්න

cmd({
    pattern: "menu4",
    desc: "Check if the bot is active.",
    category: "info",
    react: "🤖",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User";
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        const formattedInfo = `
🧙‍♂️ *DORA-MD MENU* 🧙‍♂️

Hey 👋🏻 ${pushname}

🕒 *Time*: ${currentTime}

📅 *Date*: ${currentDate}

⏳ *Uptime*: ${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds

╭━━━❂ 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙼𝙸𝙽𝙸 𝙱𝙾𝚃 ❂⁠⁠⁠⁠━━─••*
║╭━━══••══━━••⊷ 
┊✺│ *🏮𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┊✺│.delete 
┊✺│.shutdown 
┊✺│.broadcast
┊✺│.setpp
┊✺│.clearchats
┊✺│.gjid
┊✺│━━━━••✧ 
┊✺│ *🏮𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┊✺│.tagall
┊✺│.hidetag
┊✺│━━━━••✧ 
┊✺│ *🏮𝙰𝙸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┊✺│.ai
┊✺│.siri
┊✺│━━━━••✧
┊✺│ *🏮𝙸𝙼𝙶 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┊✺│.img
┊✺│.
┊✺│━━━━••✧ 
┊✺│ *🏮VOICE REPLY*
┊✺│5.1 AUTO VOICE ON
┊✺│5.2 AUTO VOICE OFF
┊✺│━━━━••✧ 
┊✺│ *🏮STICKER REPLY*
┊✺│6.1 AUTO STICKER ON
┊✺│6.2 AUTO STICKER OFF
┊✺│━━━━••✧ 
┊✺│ *🏮AUTO REPLY*
┊✺│7.1 AUTO STICKER ON
┊✺│7.2 AUTO STICKER OFF
┊✺│━━━━••✧ 
┊✺│ *🏮ANTI BAD WORD*
┊✺│8.1 ANTI BAD WORD ON
┊✺│8.2 ANTI BAD WORD OFF
┊✺│━━━━••✧ 
┊✺│ *🏮ANTI LINK*
┊✺│9.1 ANTI LINK ON
┊✺│9.2 ANTI LINK OFF
┊✺│━━━━••✧
┊✺│ *🏮AUTO REED STATUS*
┊✺│10.1 REED STATUS ON
┊✺│10.2 REED STATUS OFF
┊✺│━━━━••✧
┊✺│ *🏮ALWAYS ONLINE*
┊✺│11.1 ALWAYS ONLINE ON
┊✺│11.2 ALWAYS ONLINE OFF
┊✺│━━━━••✧
┊✺│ *🏮AUTO RECORD*
┊✺│12.1 AUTO RECORD ON
┊✺│12.2 AUTO RECORD OFF
┊✺│━━━━••✧
┊✺│ *🏮AUTO REACT*
┊✺│12.1 AUTO REACT ON
┊✺│12.2 AUTO REACT OFF
║╰━━══••══━━••⊷
╰════────════◆◆◆

🧙‍♂️ *CHANEL :- https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28*

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
        `.trim();

        // ✅ Random Voice Clip එකක් Select කරනවා
        const randomVoice = VOICE_CLIPS[Math.floor(Math.random() * VOICE_CLIPS.length)];

        // Check if video & voice URLs are valid
        if (!ALIVE_VIDEO || !ALIVE_VIDEO.startsWith("http")) {
            throw new Error("Invalid ALIVE_VIDEO URL. Please set a valid video URL.");
        }
        if (!randomVoice || !randomVoice.startsWith("http")) {
            throw new Error("Invalid Voice Clip URL. Please set a valid URL.");
        }

        // ✅ Random Voice Clip එක යවනවා
        await conn.sendMessage(from, {
            audio: { url: randomVoice },
            mimetype: 'audio/mp4', // MP3 / OGG formats සඳහා auto detect වේ
            ptt: true // 🎤 PTT (Push to Talk) වගේ play වේ
        }, { quoted: mek });

        // ✅ Video message with autoplay (GIF style)
        await conn.sendMessage(from, {
            video: { url: ALIVE_VIDEO }, // Video එකේ direct URL එක
            caption: formattedInfo,
            gifPlayback: true, // GIF වගේ autoplay වෙනවා (Sound play වෙන්නේ නැහැ)
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421846535301@newsletter',
                    newsletterName: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});
