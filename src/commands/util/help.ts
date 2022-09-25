import { Colors, EmbedBuilder } from "discord.js";
import { Command } from "../../def";
import { commands } from "../../handlers/command";
import { maxDuration } from "../../lib/constants";
import config from "../../lib/config";

export default new Command({
    name: "help",
    description: "List all commands.",
    handler: async (message, args) => {
        const embed = new EmbedBuilder({
            fields: commands.map(c => ({
                name: config.discord.prefix + c.name,
                value: c.description || "No description."
            })),
            footer: { text: `Optionally, pass a duration to hold the input for in ms to any controller commands, max is ${maxDuration}.` },
            color: Colors.Red
        })

        await message.reply({ embeds: [embed] });
    },
})