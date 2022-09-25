import { Client, ClientOptions, Message } from "discord.js";

export interface CommandOptions {
    name: string;
    description: string;
    su?: boolean;
    handler: (message: Message, args: string[]) => Promise<void>;
}

export class Command {
    public name: string;
    public description: string;
    public su?: boolean;
    public handler: (message: Message, args: string[]) => Promise<void>;

    public constructor(co: CommandOptions) {
        this.name = co.name;
        this.description = co.description;
        this.su = co.su;
        this.handler = co.handler;
    };
}

export interface Config {
    discord: {
        token: string;
        prefix: string;
        users: string[];
    },
    switch: {
        ip: string;
    }
}

export interface CClientOptions extends ClientOptions {
    config: Config;
}

export class CClient extends Client {
    config: Config;

    public constructor(options: CClientOptions) {
        super(options);

        this.config = options.config;
    }
}