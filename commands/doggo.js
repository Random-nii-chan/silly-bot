module.exports.run = async(client, message, args) => {
	const config = require("../json/config.json");
	const classes = require("./classes.js");
	const Discord = require("discord.js");

	const Manager = classes.Manager;
	const BoosterManager = classes.BoosterManager;
	const InventoryManager = classes.InventoryManager;
	
	var profiles = client.databases.get("profiles");
	var bManager = new BoosterManager(profiles);
	var iManager = new InventoryManager(profiles,message.author.id);

	var mode = args[0];
	var booster = args[1];

	//var attachment = new Discord.Attachment("./assets/warframe.png");
	var embed = new Discord.RichEmbed()
		.attachFile("./assets/warframe.png")
		.setImage("attachment://warframe.png")
		.setTitle("Yes");
	message.channel.send(embed);
}

module.exports.config = {
	command: "doggo",
	syntax: "doggo [command]",
	description: "Manages your doggo collection. Do not specify any command to display the list of the available commands."
}