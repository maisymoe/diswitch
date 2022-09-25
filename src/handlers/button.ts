import { client } from "..";
import { resolveDirection } from "../lib/common";
import { defaultButtonDuration, defaultDpadDuration, defaultRStickDuration, defaultStickDuration } from "../lib/constants";
import { send } from "../lib/switch";

export default async function buttonHandler() {
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isButton()) return;

        const action = interaction.customId.split("_");

        switch(action[0]) {
            case "BUTTON":
                send(`press ${action[1]}`);
                setTimeout(async () => { send(`release ${action[1]}`)}, defaultButtonDuration);
            break;
            case "DPAD":
                send(`press D${action[1]}`);
                setTimeout(async () => { send(`release D${action[1]}`)}, defaultDpadDuration);
            break;
            case "STICK":
                send(`setStick LEFT ${resolveDirection(action[1])}`);
                setTimeout(async () => { send("setStick LEFT 0x0 0x0")}, defaultStickDuration);
            break;
            case "RSTICK":
                send(`setStick RIGHT ${resolveDirection(action[1])}`);
                setTimeout(async () => { send("setStick RIGHT 0x0 0x0")}, defaultRStickDuration);
            break;
        }

        await interaction.deferUpdate();
    });
}