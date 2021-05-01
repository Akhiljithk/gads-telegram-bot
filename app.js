// const Telegraf  = require('telegraf').Telegraf 
const { Composer } = require('micro-bot')
const axios = require('axios');


// const bot = new Telegraf('1772621894:AAHsrHxyN_JmxGeRJttSv_5rAf1vaYvxxW0')
const bot = new Composer


bot.start((ctx) => {
    ctx.reply(`
    Try :
    /about
    /contact
    /website
    /instagram
    /events
    /covid
    /crew
    /quotes
    `)
})

bot.help((ctx) => ctx.reply('Njan aanu Mittu Bot. Enik ee karyagal cheyan pattum: NULL FOR NOW'))

bot.on('sticker', (ctx) => {
    ctx.reply('Nice sticker')
})
bot.on('photo', (ctx) => {
    ctx.reply('Nice one')
})
bot.on('audio', (ctx) => {
    ctx.reply('Okay')
})
bot.hears('gads', (ctx) => {
    ctx.reply('Yup!')
})
bot.hears('Hello', (ctx) => {
    ctx.reply('Hi')
})
bot.hears('Hi', (ctx) => {
    ctx.reply('Hello')
})
// bot.command('da', (ctx)=>{
//     ctx.reply('Oo')
// })
// bot.command('mittu', (ctx)=>{
//     msg = ctx.message.text
//     newAr = msgArray = msg.split(' ')
//     newAr.shift()
//     // console.log(newAr)
//     ctx.reply(newAr + ' enn vecha, ath aara')
// })
bot.command('crew', (ctx)=>{
    ctx.reply(`
    Team: 
    Gokul C M
    Shaino Sajimon
    Akhiljith K
    Devanand A
    Abhishek V M
    Areena S Jayan
    Hisana Thasneem
    Malavika M Hari
    Meenu S
    Nithya Satheesh
    Vishnu V 
    Abhijith Udayakumar`)
})
bot.command('contact', (ctx)=>{
    ctx.reply(`
    TBI GEC Barton Hill
    Trivandrum, 695035, India
    
    📲Phone: +91 8136879150
    📧Email: gads@gadssolutions.in`)
})
bot.command('about', (ctx)=>{
    ctx.reply(`
    ABOUT US

GADS is a student start up registered under Technology Business Incubator at Government Engineering College Trivandrum, Barton Hill
Student startup aiming to make revolutions in the field of digitalisation, marketing and upskilling.

GADS aims at providing precise technological solutions.
High standard cross platform mobile application development according to client needs.
Efficient and responsive web development services at the cheapest rate without compromising quality.
Worshops, webinars and internships for students.
NGO works in the field of upskilling the one's with least technology availability along with boosting talents of engineering minds.
    `)
})

bot.command('/quotes', (ctx)=>{
    url = "http://yerkee.com/api/fortune"

    axios.get(url).then((res)=>{
        console.log(res.data.fortune)
        ctx.reply(res.data.fortune)
    })
    // msg = res.data.fortune
})

bot.command('covid', (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id,"Choose one",
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Kerala",callback_data:"KL"},{text:"India",callback_data:"IN"}],
            ]
        }
    }
    )
})

bot.action('KL',async(ctx)=>{
    ctx.deleteMessage()
    data=await getCovidData()
    ctx.telegram.sendMessage(ctx.chat.id, data,
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"GO back",callback_data:"go-back"}],
            ]
        }
    }
    )
})

bot.action('IN',(ctx)=>{
    getCovidData()
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,"Sorry this feature will update soon",
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"GO back",callback_data:"go-back"}],
            ]
        }
    }
    )
})

bot.action('go-back', (ctx)=>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,"Choose one",
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Kerala",callback_data:"KL"},{text:"India",callback_data:"IN"}],
            ]
        }
    }
    )
})

async function getCovidData() {
    url = "https://api.covid19india.org/data.json"
    let res = await axios.get(url)

    stateArr = res.data.statewise
    dataState=stateArr.filter((item)=>{
        return item.statecode== 'KL'
    })
    keralaCovidData = dataState[0] //[{this is ar[0] contains data},]
    result = `
    Covid statictics in ${keralaCovidData.state} now

    🦠confirmed: ${keralaCovidData.confirmed}
    ⚰deaths:${keralaCovidData.deaths}
    🥳recovered:${keralaCovidData.recovered}
    ⏲lastupdatedtime:${keralaCovidData.lastupdatedtime}
    `
    console.log(result)
    return result
}

bot.command('instagram', (ctx)=>{
    ctx.telegram.sendChatAction(ctx.chat.id,'upload_photo')
    ctx.telegram.sendPhoto(ctx.chat.id, {source:"img/insta.png"},{"caption":"www.instagram.com/gads_llp"})
})
bot.command('website', (ctx)=>{
    ctx.telegram.sendChatAction(ctx.chat.id,'upload_photo')
    ctx.telegram.sendPhoto(ctx.chat.id, {source:"img/website.png"},{"caption":"www.gadssolutions.in"})
})
bot.command('events', (ctx)=>{
    ctx.telegram.sendChatAction(ctx.chat.id,'upload_photo')
    ctx.telegram.sendPhoto(ctx.chat.id, {source:"img/event2.png"},{"caption":`
    "𝗧𝗵𝗲 𝗯𝗲𝘀𝘁 𝗺𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 𝗱𝗼𝗲𝘀𝗻'𝘁 𝗳𝗲𝗲𝗹 𝗹𝗶𝗸𝗲 𝗺𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴"
🅣🅞🅜 🅕🅘🅢🅗🅑🅤🅡🅝🅔

Hey folks !

Digital marketing, online marketing, internet advertising.....whatever you call it,marketing is a big deal in this days. After all,internet usage has more than doubled over the past decade and this shift has massively affected how people purchase products and interact with businesses

𝗜𝗘𝗘𝗘 𝗖𝗨𝗦𝗔𝗧 𝗦𝗕 in collaboration with 𝗚𝗔𝗗𝗦 is conducting a talk session on the topic "𝗜𝗻𝗱𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝘁𝗼 𝗱𝗶𝗴𝗶𝘁𝗮𝗹 𝗺𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 .

GADS LLP is registered under the Central Ministry of Corporate Affairs, Startup India and KSUM.

🅓🅐🅣🅔 🗓️:2/05/2021
🅣🅘🅜🅔 ⏰: 7 pm

𝗧𝗵𝗲𝘀𝗲 𝗮𝗿𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝘄𝗲 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗳𝗼𝗰𝘂𝘀𝗶𝗻𝗴 𝗼𝗻 𝘁𝗵𝗶𝘀 𝘀𝗲𝘀𝘀𝗶𝗼𝗻 👇🏻
1. What is Digital marketing
2. Why digital marketing
3.Difference compared to traditional marketing
4. Social Media Marketing
5. Some social media algorithms and business accounts
6. SEO
7. Advantages and disadvantages
8. Job Opportunities
9.Q & A

Registration link:-http://bit.ly/ieeegads

Session open to all 🤩
    `})
    ctx.reply(`
    CSI SB GECB, ISTE SC GECB and IEEE SB GECB in a first time collaboration brings to you a talk session on Opportunities for First Year Students to answer all your questions on opportunities for first year students in start ups, detailed procedures, benefits of technical societies and much more.💫
The session will be handled by the star entrepreneurs of GECB and founders of GADS LLP- Gokul CM, Shaino Sajimon and Devanand A who made their marks right in their first year of college.🔥

Hurry up and book your seats

📌 Registration link : https://gecbieee.org/opportunities

🔖 Certificates will be provided for all active participants
🔖 Open to all

🗓️ Date: 5 May 2021
⏰ Time: 7 pm
💻 Platform: Google Meet

☎️For more details:
Gowri - 9249477118
Harishree - 8281837818
    https://www.instagram.com/p/COQRKI5sHa2/
    `)
})

// bot.launch()
module.exports = bot