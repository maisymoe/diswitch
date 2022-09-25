import { Command } from "../../def";
import { send } from "../../lib/switch";
import { defaultDpadDuration, validDirections } from "../../lib/constants";
import { validateDuration, validateInput } from "../../lib/common";

export default new Command({
    name: "dpad",
    description: `Send a D-PAD press, valid directions are ${validDirections.join(", ")}`,
    handler: async (message, args) => {
        const direction = args[0]?.toUpperCase();
        const duration = parseInt(args[1]);
        validateInput(direction, "dpad");
        validateDuration(duration);

        send(`press D${direction}`);
        setTimeout(async () => { send(`release D${direction}`)}, duration || defaultDpadDuration);
        await message.react("✅");
    },
})