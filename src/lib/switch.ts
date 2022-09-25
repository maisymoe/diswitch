import { createConnection } from "net";
import config from "./config";

export const connection = createConnection(6000, config.switch.ip);
connection.setEncoding("utf-8");

export const send = (content: string) => connection.write(`${content} \r\n`);

// connection.on("data", (data) => { writeFileSync(`outputs/data-${Date.now()}.jpg`, Buffer.from(data.toString(), "hex").toString()) });