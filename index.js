const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const message = {
	type: 'text',
	text: 'Hello World!'
};

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Succeed!');
});

app.post('/linewebhook', linebotParser);

reply_token = params['events'][0]['replyToken']

bot.replyMessage(reply_token, message)
  .then(() => {
    console.log('Success');
})
  .catch((err) => {
    console.log('Error', error);
  });

/*
//--reply the same message--
bot.on('message', function (event) {
	event.reply(event.message.text).then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
});*/
//--------------------------

app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});