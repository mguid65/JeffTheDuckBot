const Discord = require("discord.js");
const bot = new Discord.Client();
const cfg = require("./config.json")

bot.on("ready", () => {
  console.log("Starting JeffTheDuckBot!");
});

prefix = cfg.prefix;
duck_choices = cfg.duck_images;

bot.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()

  if (command === 'quack') {
    if(args.length !== 0 && args[0] > 0 && args[0] <= 20) {
      for(var i = 0; i < args[0]; i++) {
        message.channel.send("Quack!");
      }
    } else {
      message.channel.send("Quack!");
      message.channel.send("Quack!");
      message.channel.send("Quack!");
    }
  } else
  if (command === 'duck') {
    if (duck_choice.length === 0) return;

    var choice = duck_choices[Math.floor(Math.random()*duck_choices.length)]; //choose a random duck image to send

    message.channel.send('Quack!', {
      files: [
          choice
      ]
    });
  } else
  if (command === 'help') {
    message.channel.send("```Commands:\n\nquack : quack\nduck : get duck image\nhelp : print this help text```");
  }
});

bot.login(cfg.token);

