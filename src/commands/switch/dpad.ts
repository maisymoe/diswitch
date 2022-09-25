import { Command } from "../../def";
import { errorEmbed } from "../../lib/embeds";
import { send } from "../../lib/switch";

export const validDirections = ["UP", "DOWN", "LEFT", "RIGHT"];

export default new Command({
    name: "dpad",
    description: "Send a D-PAD press",
    handler: async (message, args) => {
        if (!args[0]) {
            await message.reply({ embeds: [errorEmbed(`No direction specified. Available direction are ${validDirections.join(", ")}`)] });
            return;
        }

        const direction = args[0].toUpperCase();

        if (!validDirections.includes(args[0].toUpperCase())) {
            await message.reply({ embeds: [errorEmbed(`Invalid direction! Available directions are ${validDirections.join(", ")}`)] });
            return;
        }

        send(`click D${direction}`);

        await message.react("✅");
    },
})