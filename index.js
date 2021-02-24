const log = console.log
const discord = require("discord.js")
const client = new discord.Client()
const config = require("./config.json")
const fs = require("fs")

//função de eventos em pasta
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);

    files.forEach((file) => {

        const Event = require(`./events/${file}`)

        let EventName = file.split(".")[0];

        client.on(EventName, Event.bind(null, client));

    });
})
//tokem
client.login(config.tokem)