var Botkit = require('botkit');
var os = require('os');

require('dotenv').config()

var controller = Botkit.slackbot({
  debug: true
});

var bot = controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM();


controller.on('direct_mention', function(bot, message) {
  bot.reply(message, "Hey there! Thanks for looking at my resume. To get to the good bits there are a few command you'll need. If you want to hear about my work experience type '@resbot experience'. If you want to hear about my education type '@resbot eduction'. If you want my contact information type '@resbot contact'. If you want a list of my past awards and achievements type '@resbot achievements'");
});

controller.hears(['experience', 'previous employment'],['ambient'], function(bot,message){
  return bot.reply(message, "2010 - 2011 - Sport for Jove Theatre company crew and actor: Bella Vista Shakespeare festival, Leura Shakespeare festival, the Botanic Gardens Shakespeare festival. 2011 - 2012 - TeaToo Chatswood Chase, sales assistant. 2015 - Intern in charge of Community Service Projects at the National Student Leadership Forum (Not-for-profit). 2013 - 2016 - Touch Football coach, Roseville College. 2016 - Intern at Mentally Friendly digital agency.");
});

controller.hears('education',['ambient'], function(bot, message){
  return bot.reply(message, "Bachelor of Arts - The University of Sydney. Diploma of Software Development - Coder Factory Academy");
});

controller.hears('achievments',['ambient'], function(bot, message){
  return bot.reply(message, "University - Bachelor of Arts majoring in Ancient History and History, 81 (Upper-Distinction) average. Sydney University Ancient History Senior Essay Prize. Nominated for ASCS (Australasian Society for Classical Studies) essay competition for best undergraduate Ancient History essay in Australia.");
});

controller.hears('contact', ['ambient'], function(bot, message){
  return bot.reply(message, "Email: james.winestock@gmail.com | Mobile: 0400186482 ");
});
