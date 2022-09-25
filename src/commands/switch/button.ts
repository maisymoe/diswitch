import { Command } from "../../def";
import { errorEmbed } from "../../lib/embeds";
import { send } from "../../lib/switch";

export const validButtons = ["A", "B", "X", "Y", "PLUS", "MINUS", "L", "R", "ZL", "ZR"];

export default new Command({
    name: "button",
    description: "Send a button press",
    handler: async (message, args) => {
        if (!args[0]) {
            await message.reply({ embeds: [errorEmbed(`No button specified. Available buttons are ${validButtons.join(", ")}`)] });
            return;
        }

        const button = args[0].toUpperCase();

        if (!validButtons.includes(args[0].toUpperCase())) {
            await message.reply({ embeds: [errorEmbed(`Invalid button! Available buttons are ${validButtons.join(", ")}`)] });
            return;
        }

        send(`click ${button}`);

        await message.react("✅");
    },
})