const { Telegraf } = require('telegraf')

const dotenv = require('dotenv');

dotenv.config();


const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

module.exports.telegram = (message)=>{
    bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
}