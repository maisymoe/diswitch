import { codeBlock } from "discord.js";
import { client } from "..";
import { errorEmbed } from "../lib/embeds";
import { commands } from "./command";

export default async function messageHandler() {
    client.on("messageCreate", async (message) => {
        if (!message.content.startsWith(client.config.discord.prefix) || message.author.bot) return;

        const args = message.content.slice(client.config.discord.prefix.length).trim().split(" ");
        const commandName = args.shift()?.toLowerCase();

        const command = commands.find(i => i.name === commandName);
        if (!command) return;

        try {
            if (command.su && !client.config.discord.users.includes(message.author.id)) { 
                await message.reply({ embeds: [errorEmbed(`${message.author.username} is not in the sudoers file. This incident will be reported.`)] });
                return;
            }

            await command?.handler(message, args);
        } catch(error) {
            const typedError = error as Error;
            await message.reply({ embeds: [errorEmbed(codeBlock("js", (typedError.stack ?? typedError.toString()).substring(0, 1000)))] });
        }
    });
}