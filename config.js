const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QADEER-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVmRVFUOG92THRRVktFN3lrOFVqSExEV2Z2RXJtNWFaSk96Sm0yYnBFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmREMDcrVEIrcENqdDdtWmxjdWFFaFkzT0dKWDR5ZmdGQVkxSmN6aG5DQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRlNLSlR2YUc5bEtzL2ViT2VTQ1hmd0NwYmxuVHVFemszOWMyRWp5djBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUE1TZlhuTGRRUFZKYVpaY3ltemoreTFEb0NuRnlGSC8xb3Y2d3JuT1FVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPZW1DaWpJL0NhdkJ3NzRRbE5EV3hBUTNTNHFyUTRScGFMOWR0b0VZVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdZZnRGV0lTelpCK24yTkNjZml6azZLYXExRG90cnJBY3k1UXFsOXlLMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFIbVlmdlVOKzQ1RlVrTjVTdmZzd0pja3ppUm9LWmFRcnR2ODN0T3cyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRW42V1FyVnRvSDdvUklrRUl0RUhkdm9sdFBPaHN6ekdNSWFNaU10ay9BTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktZVTRXcWJrUm5YZFF5VXJMb3Fsa1lQS0ZvK2s3WmE3WmZiUlRiQ2hYL2NHczNTQnVSTXhkYk9JZzZROTRhR3pSZTBmUEg2OVdWUUhxWjlja3pCWWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiI4NDJBRmxUZWFodk1jbUpPVmY1VjBKSGxvUERhbDd4ZGd6Rmc0WXY3WnJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQwOTM4NDQ1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0IyRThGNTREOEZBODAzMDdGQjJCMTIyQzcyMTBDQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5Nzg2NTUzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MDkzODQ0NTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNGNzBBMTVCNkRCQjY0MTU5QTlBMDc2QTI5MUM0NDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTc4NjU1M30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDA5Mzg0NDUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMDYzMDIxQTdFRkYxQ0ZBQ0I5QTIyOTYyRTE3MDIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3ODY1NTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkE1SFNDUjMxIiwibWUiOnsiaWQiOiI5MjM0MDkzODQ0NTA6MTNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDk2MzM1OTU2NDYwNzI6MTNAbGlkIiwibmFtZSI6IkFrIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJWEwycThDRUxYc2tNY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJacWVUcy9EdkoyRDFSRzNPV1lxUStUcFo5UTRLVDhLNWZTV0M2S0NSRjNjPSIsImFjY291bnRTaWduYXR1cmUiOiJxZjd2NmIyMllhZ3JYb1hRWWJQb3owWXpZTUsvS05Dc0svRzA1cytFemRDMTRYdTVQc2pnbGV3Y3BGa0RBamVoRlg3aVVBZ3VlWkluUzV3RWRBZG1EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRGc4RUp5SzcvWHdDZCtjUmtlVEZaSmVkaUc3NjJnZ0I3NHRHZk81bmpwN0xsVVhpUW5PS0ZEV1JnL2lDZFVVYWVYZWhxcFZXLzJhUDFsaWMrWmxZZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MDkzODQ0NTA6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2FuazdQdzd5ZGc5VVJ0emxtS2tQazZXZlVPQ2svQ3VYMGxndWlna1JkMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5Nzg2NTUyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9IeCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SK_EDITOR.bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SK_EDITOR.bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SK_EDITOR.bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
