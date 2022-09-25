import { Client, GatewayIntentBits } from "discord.js";

import config from "./lib/config";
import messageHandler from "./handlers/message";
import commandHandler from "./handlers/command";
import buttonHandler from "./handlers/button";

export const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once("ready", async () => {
    await commandHandler();
    await messageHandler();
    await buttonHandler();

    console.log("Client ready!");
});

client.login(config.discord.token);