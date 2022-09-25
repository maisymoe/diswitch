import { Command } from "../../def";
import { send } from "../../lib/switch";
import { defaultStickDuration, validDirections } from "../../lib/constants";
import { resolveDirection, validateDuration, validateInput } from "../../lib/common";

export default new Command({
    name: "stick",
    description: `Move the left stick, valid directions are ${validDirections.join(", ")}.`,
    handler: async (message, args) => {
        const direction = args[0]?.toUpperCase();
        let duration = parseInt(args[1]);
        validateInput(direction, "stick");
        validateDuration(duration);

        send(`setStick LEFT ${resolveDirection(direction)}`);
        setTimeout(async () => { send("setStick LEFT 0x0 0x0")}, duration || defaultStickDuration);
        await message.react("✅");
    },
})