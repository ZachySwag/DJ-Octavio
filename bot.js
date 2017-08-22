const Discord = require("discord.js");

const TOKEN = "MzQ5MzU2NDE1NjQwNjY2MTE0.DH4ipw.cSPIYjCXzjOLIHI1Pk-6m2JSM-M";
const PREFIX = "$";

var bot = new Discord.Client();

var meemees = Math.floor(Math.random() * 2);

function randomWholeNum() {
  return Math.random();
}

bot.on("ready", function() {
  console.log("I am ready");
  
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general-chat").sendMessage(member.toString() + " Welcome to the Official Inkopolis Heroes Discord! We're glad to have you here! Type \"$help\" if you need anything. Please read #rules so you'll be good to go. You have been givem the role of Non-Member, and you have basic permissions. If you would like to be a Member, just let an Admin know if you play Splatoon 1 or 2. If you don't, you will stay as a Non-Member. Thanks for joining the Discord! You'll be happy you joined!")

  member.addRole(member.guild.roles.find("name", "(Non-Members) Salmonoid Chum"));
});

bot.on ("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var arg = message.content.substring(PREFIX.length).split(" ");

  switch (arg[0].toLowerCase()) {
    case "hello":
      message.channel.sendMessage("Hey " + message.author.toString() + "! What's up?? Having a good day? :thinking:");
      break;
    case "memes":
      randomWholeNum();
      if meemees == 1 {
        message.channel.sendMessage("england is my city");
      }
      if meemees == 2 {
        message.channel.sendMessage("Is mayonaise an instument?");
      }
      break;
    case "info":
      message.channel.sendMessage(message.author.toString() + " I am the very best bot, like no bot ever was. I was programmed by a boy who caught them all. (No not Ash Ketchum)");
      break;
    case "help":
      message.channel.sendMessage(message.author.toString() + " Here is a list of commands:");
      var embed = new Discord.RichEmbed()
        .addField("$hello:", "Say hi to me!")
        .addField("$info:", "Find out who I am!")
        .addField("$memes:", "Get a free meme! fresh and hot!");
      message.channel.sendEmbed(embed);
      break;
    default:
      message.channel.sendMessage(message.author.toString() + " I don't recognise what you're trying to tell me. Type $help for a list of commands.");
  }
});

bot.login(TOKEN);
