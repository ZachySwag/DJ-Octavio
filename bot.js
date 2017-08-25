const Discord = require("discord.js");

const TOKEN = "MzQ5MzU2NDE1NjQwNjY2MTE0.DH4ipw.cSPIYjCXzjOLIHI1Pk-6m2JSM-M";
const PREFIX = "$";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("I am ready");
  
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general-chat").sendMessage(member.toString() + " Welcome to the Official Inkopolis Heroes Discord! We're glad to have you here! Type \"$help\" if you need anything. Please read so you'll be good to go. You have been givem the role of Non-Member, and you have basic permissions. If you would like to be a Member, just let an Admin know if you play Splatoon 1 or 2. If you don't, you will stay as a Non-Member. Thanks for joining the Discord! You'll be happy you joined!")

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
    case "meme":
      memess = Math.floor(Math.random() * 5) + 1;
      if (memess == 1) {
        message.channel.sendMessage(message.author.toString() + " England is my city. Wait is it a city? Let me check my math real quick...");
      } else if (memess == 2) {
        message.channel.sendMessage(message.author.toString() + " Mayonaise actually IS an instrument. You just gotta slurp it off the spoon!");
      } else if (memess == 3) {
        message.channel.sendMessage(message.author.toString() + " Why talk about memes you horific person! Harambe is dead! ;-;");
      } else if (memess == 4) {
        message.channel.sendMessage(message.author.toString() + " Cashhh meh ousside or you'll get the ban hamma bro. :P");
      } else if (memess == 5) {
        message.channel.sendMessage(message.author.toString() + " We are number on--- oh that meme's dead? Nevermind...");
      } else if (memess == 6) {
        message.channel.sendMessage(message.author.toString() + " That awkward moment when you get into the van, but there's no candy...");
      }
      break;
    case "roastme":
      roast = Math.floor(Math.random() * 4) + 1;
      if (roast == 1) {
        message.channel.sendMessage(message.author.toString() + " The best part about hanging out with you, is when I'm not.");
      } else if (roast == 2) {
        message.channel.sendMessage(message.author.toString() + " Were you born on the highway? That's where accidents happen.");
      } else if (roast == 3) {
        message.channel.sendMessage(message.author.toString() + " Sorry I'm not assuming your gender, I'm proving your gender.");
      } else if (roast == 4) {
        message.channel.sendMessage(message.author.toString() + " You're almost as annoying as Nintapple... not quite though...");
      }
      break;
    case "info":
      message.channel.sendMessage(message.author.toString() + " I am the very best bot, like no bot ever was. I was programmed by a boy who caught them all. (No not Ash Ketchum)");
      break;
    case "help":
      message.channel.sendMessage(message.author.toString() + " Here is a list of commands:");
      var embed = new Discord.RichEmbed()
        .addField("$hello:", "Say hi to the bot!")
        .addField("$info:", "Find out who I am!")
        .addField("$memes:", "Get a free meme! fresh and hot!")
        .addField("$roastme:", "Have fun losing your self-esteem...");
      message.channel.sendEmbed(embed);
      break;
    default:
      message.channel.sendMessage(message.author.toString() + " I don't recognise what you're trying to tell me. Type $help for a list of commands.");
  }
});

bot.login(TOKEN);
