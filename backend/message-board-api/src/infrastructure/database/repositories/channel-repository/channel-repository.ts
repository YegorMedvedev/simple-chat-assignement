import {ChannelModel} from "../../../../core";

import {CHANNEL_STORAGE} from "./storage";

import {injectable} from "inversify";
import uuid = require("uuid");

@injectable()
export class ChannelRepository {
    constructor() {
        const channel1 = new ChannelModel();
        channel1.id = uuid.v4();
        channel1.name = "Channel #1";

        const channel2 = new ChannelModel();
        channel2.id = uuid.v4();
        channel2.name = "Channel #2";

        CHANNEL_STORAGE.push(channel1);
        CHANNEL_STORAGE.push(channel2);
    }

    public selectChannels(): ChannelModel[] {
        return CHANNEL_STORAGE;
    }
}
