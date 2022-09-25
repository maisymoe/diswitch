import { Command } from "../../def";
import { errorEmbed } from "../../lib/embeds";
import { send } from "../../lib/switch";
import { resolveDirection } from "../../lib/resolveDirection";

export const validDirections = ["UP", "DOWN", "LEFT", "RIGHT"];

export default new Command({
    name: "stick",
    description: "Move the left stick",
    handler: async (message, args) => {
        if (!args[0]) {
            await message.reply({ embeds: [errorEmbed(`No direction specified. Available direction are ${validDirections.join(", ")}`)] });
            return;
        }

        const direction = args[0].toUpperCase();
        let duration = parseInt(args[1]);

        if (args[1] && (duration === NaN || duration > 2500)) {
            await message.reply({ embeds: [errorEmbed(`Duration must be a number less than or equal to 2500.`)] });
            return;
        }

        if (!validDirections.includes(args[0].toUpperCase())) {
            await message.reply({ embeds: [errorEmbed(`Invalid direction! Available directions are ${validDirections.join(", ")}`)] });
            return;
        }

        send(`setStick LEFT ${resolveDirection(direction)}`);
        setTimeout(async () => { send("setStick LEFT 0x0 0x0")}, duration || 1000);

        await message.react("✅");
    },
})