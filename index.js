const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Prêt à collecter des messages !")
}) 

client.on ("message", message => {

    if(message.content = "Scat"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

    if(message.content = "Rlr"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

    if(message.content = "Ruller"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

    if(message.content = "Ruler"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

    if(message.content = "Roller"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

    if(message.content = "Roler"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

    if(message.content = "Axel"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

    if(message.content = "Aksel"){
        client.users.get("367374581884780545").send(message.author.username + message.author.tag + "a envoyé " + message);        
    }

})

client.login("") 
