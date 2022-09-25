import { Command } from "../../def";
import { send } from "../../lib/switch";
import { defaultRStickDuration, validDirections } from "../../lib/constants";
import { resolveDirection, validateDuration, validateInput } from "../../lib/common";

export default new Command({
    name: "rstick",
    description: `Move the right stick, valid directions are ${validDirections.join(", ")}.`,
    handler: async (message, args) => {
        const direction = args[0]?.toUpperCase();
        let duration = parseInt(args[1]);
        validateInput(direction, "stick");
        validateDuration(duration);

        send(`setStick RIGHT ${resolveDirection(direction)}`);
        setTimeout(async () => { send("setStick RIGHT 0x0 0x0")}, duration || defaultRStickDuration);
        await message.react("✅");
    },
})