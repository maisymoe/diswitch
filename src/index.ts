import { CClient } from "./def";
import { GatewayIntentBits } from "discord.js";

import getConfig from "./lib/getConfig";
import messageHandler from "./handlers/message";
import commandHandler from "./handlers/command";

export const client = new CClient({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    config: getConfig(),
});

client.once("ready", async () => {
    await commandHandler();
    await messageHandler();

    console.log("Client ready!");
});

client.login(client.config.discord.token);