import { Command } from "../../def";
import { send } from "../../lib/switch";
import { defaultButtonDuration, validButtons } from "../../lib/constants";
import { validateDuration, validateInput } from "../../lib/common";

export default new Command({
    name: "button",
    description: `Send a button press, valid buttons are ${validButtons.join(", ")}`,
    handler: async (message, args) => {
        const button = args[0]?.toUpperCase();
        const duration = parseInt(args[1]);
        validateInput(button, "button");
        validateDuration(duration);

        send(`press ${button}`);
        setTimeout(async () => { send(`release ${button}`)}, duration || defaultButtonDuration);
        await message.react("✅");
    },
})