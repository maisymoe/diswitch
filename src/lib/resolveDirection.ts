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