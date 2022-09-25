import { validDirections, validButtons, maxDuration } from "./constants";

export function resolveDirection(direction: string) {
    switch(direction.toUpperCase()) {
        case "UP":
            return "0x0 0x7FFF";
        case "DOWN":
            return "0x0 -0x8000";
        case "LEFT":
            return "-0x8000 0x0";
        case "RIGHT":
            return "0x7FFF 0x0";
        default:
            return null;
    }
}

export function validateInput(input: string, type: "stick" | "dpad" | "button") {
    if (!input || (type === "stick" || type === "dpad") && !validDirections.includes(input)) {
        throw `Invalid direction! Available directions are ${validDirections.join(", ")}`;
    } else if (!input || type === "button" && !validButtons.includes(input)) {
        throw `Invalid button! Available buttons are ${validButtons.join(", ")}`;
    } else {
        return true;
    }
}

export function validateDuration(duration: number) {
    if (duration && (duration === NaN || duration > maxDuration)) {
        throw `Duration must be a number less than or equal to ${maxDuration}.`;
    }
}