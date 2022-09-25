import { EmbedBuilder, Colors } from "discord.js";

export const errorEmbed = (error: string) => new EmbedBuilder({ color: Colors.Red, description: error });