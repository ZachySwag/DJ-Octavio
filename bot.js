const Discord = require("discord.js");

const TOKEN = "MzM0Njc0MzMxNzUxOTQwMDk2.DFGbkA.zZQJvKrTbspebs65u_1s6Sy3BAk";
const PREFIX = "$";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("I am ready");
  
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general-chat").sendMessage(member.toString() + " Welcome to the NintenTalk Official Discord! We're glad to have you here! Type \"$help\" if you need anything! You now have the role of Member, and you have basic permissions.")

  member.addRole(member.guild.roles.find("name", "(Members) The Freshest Squids"));
});

bot.on ("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var arg = message.content.substring(PREFIX.length).split(" ");

  switch (arg[0].toLowerCase()) {
    case "hello":
      message.channel.sendMessage("Hey " + message.author.toString() + "! What's up?? Having a good day? :thinking:");
      break;
    case "e":
      message.channel.sendMessage("england is my city");
      break;
    case "twitter":
      message.channel.sendMessage("Check out NintenTalk's Twitter here to get all the latest updates for the channel! https://twitter.com/NintenTalk");
      break;
    case "info":
      message.channel.sendMessage(message.author.toString() + " I am the very best bot, like no bot ever was. I was programmed by a boy who caught them all. (No not Ash Ketchum)");
      break;
    case "help":
      message.channel.sendMessage(message.author.toString() + " Here is a list of commands:");
      var embed = new Discord.RichEmbed()
        .addField("$hello:", "Say hi to me!")
        .addField("$info:", "Find out who I am!")
        .addField("$twitter:", "Get a link to NintenTalk's official twitter!");
      message.channel.sendEmbed(embed);
      break;
    default:
      message.channel.sendMessage(message.author.toString() + " I don't recognise what you're trying to tell me. Type $help for a list of commands.");
  }
});

bot.login(TOKEN);
