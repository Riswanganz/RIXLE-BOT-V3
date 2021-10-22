const fetch = require("node-fetch")
module.exports = {
name: ["manga"],
type: ["searching"],
description: "find manga",
utilisation: userbot.prefix + "manga <judul>",

async execute(m) {
let { conn, text } = data
if (!text) return m.reply('judul/title?')
let res = await fetch(`https://hardianto.xyz/api/anime/manga?search=${text}&apikey=hardianto`)
let json = await res.json()
let down = downloads[Math.floor(Math.random() * downloads.length)]

let capt = `
*👑Name:* ${json.result.name}
*🔖Title:* ${json.result.title}
*🗒️Note:* ${json.result.note}
*✍️Author:* ${json.result.author}
*🔱Released:* ${json.result.released}
*📑Status:* ${json.result.status}
*⬇️ Download :* ${json.result.down.link}
`

conn.sendFile(m.chat, await( await fetch(json.result.thumb)).buffer(), null, capt, m)
}
}
