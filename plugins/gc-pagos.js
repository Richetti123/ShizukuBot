import fg from 'api-dylux';
import fetch from 'node-fetch';
//import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
//import fbDownloader from 'fb-downloader-scrapper';
//import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
const handler = async (m, {conn, args, command, usedPrefix}) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.reply(m.chat, `722969020067202499
𝙼𝙴𝚁𝙲𝙰𝙳𝙾 𝙿𝙰𝙶𝙾 𝚆
𝙸𝚅𝙴𝚃𝚃𝙴 𝙼𝙾𝙽𝚃𝙴𝚂`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `722969020067202499
𝙼𝙴𝚁𝙲𝙰𝙳𝙾 𝙿𝙰𝙶𝙾 𝚆
𝙸𝚅𝙴𝚃𝚃𝙴 𝙼𝙾𝙽𝚃𝙴𝚂`, fkontak, m)
let contenido = `✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}`
try {
const api = await fetch(`${global.APIs.neoxr.url}/fb?url=${args}&apikey=${global.APIs.neoxr.key}`);
const response = await api.json();
if (response.status && Array.isArray(response.data)) {
const videoHD = response.data.find(video => video.quality === "HD")?.url;
const videoSD = response.data.find(video => video.quality === "SD")?.url;
const videoUrl = videoHD || videoSD;
await conn.sendFile(m.chat, videoUrl, 'video.mp4', contenido, m, null, fake);
;}} catch {   
try {
const api = await fetch(`https://api.agatz.xyz/api/facebook?url=${args}`);
const data = await api.json();
const videoUrl = data.data.hd || data.data.sd; 
const imageUrl = data.data.thumbnail; 
if (videoUrl && videoUrl.endsWith('.mp4')) {
await conn.sendFile(m.chat, videoUrl, 'video.mp4', `${gt}`, m, null, fake);
m.react('✅');
} else if (imageUrl && (imageUrl.endsWith('.jpg') || imageUrl.endsWith('.png'))) {
await conn.sendFile(m.chat, imageUrl, 'thumbnail.jpg', contenido, m, null, fake);
m.react('✅');
}} catch {   
try {
const apiUrl = `https://api.dorratz.com/fbvideo?url=${args}`;
const response = await fetch(apiUrl);
const data = await response.json();
if (data.result) {
const hdUrl = data.result.hd;
const sdUrl = data.result.sd;
const audioUrl = data.result.audio;        
const downloadUrl = hdUrl || sdUrl; 
await conn.sendFile(m.chat, downloadUrl, `error.mp4`, contenido, m)
}} catch {   
try {
const apiUrl = `${apis}/download/facebook?url=${args}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.urls || delius.urls.length === 0) return m.react("❌")
const downloadUrl = delius.urls[0].hd || delius.urls[0].sd;
if (!downloadUrl) return m.react("❌");
await conn.sendFile(m.chat, downloadUrl, `error.mp4`, contenido, m)
} catch {   
try {
const ress = await fg.fbdl(args[0]);
const urll = await ress.data[0].url;
await conn.sendFile(m.chat, urll, `error.mp4`, contenido, m)
m.react(`✅`)                
} catch (e) {   
console.log(e) 
}}}}}}
handler.command = /^(pago|pagos)$/i
export default handler

async function igeh(url_media) {
return new Promise(async (resolve, reject)=>{
const BASE_URL = 'https://instasupersave.com/';
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers['set-cookie']; // obtener cookie de la solicitud
const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
axios(config).then(function(response) {
const ig = [];
if (Array.isArray(response.data)) {
response.data.forEach((post) => {
ig.push(post.sd === undefined ? post.thumb : post.sd.url);
})} else {
ig.push(response.data.url[0].url)}
resolve({results_number: ig.length, url_list: ig});
}).catch(function(error) {
reject(error.message)});
} catch (e) {
reject(e.message);
}})}
