import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { Command } from "../../def";
import { validButtons, validDirections } from "../../lib/constants";

export default new Command({
    name: "controller",
    description: "Spawns a controller.",
    handler: async (message, args) => {
        const faceButtonRow = new ActionRowBuilder()
            .setComponents(validButtons.slice(0, 4).map(b => new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(b).setCustomId(`BUTTON_${b}`)));
        
        const triggerButtonRow = new ActionRowBuilder()
            .setComponents(validButtons.slice(4, 8).map(b => new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(b).setCustomId(`BUTTON_${b}`)));

        const dpadRow = new ActionRowBuilder()
            .setComponents(validDirections.map(d => new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`DP ${d}`).setCustomId(`DPAD_${d}`)));

        const stickRow = new ActionRowBuilder()
            .setComponents(validDirections.map(d => new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`LS ${d}`).setCustomId(`STICK_${d}`)));

        const rStickRow = new ActionRowBuilder()
            .setComponents(validDirections.map(d => new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`RS ${d}`).setCustomId(`RSTICK_${d}`)));

        // @ts-ignore what
        await message.reply({ components: [faceButtonRow, triggerButtonRow, dpadRow, stickRow, rStickRow] });
    },
})