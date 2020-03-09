import {MessageModel} from "../../../../core";

import {MESSAGES_STORAGE} from "./storage";

import {injectable} from "inversify";
import uuid = require("uuid");

@injectable()
export class MessageRepository {
    public selectMessages(channelId: string): MessageModel[] {
        return MESSAGES_STORAGE.filter((message) => message.channelId === channelId);
    }

    public insertMessage(message: string, channelId: string): MessageModel {
        const messageModel = new MessageModel();
        messageModel.id = uuid.v4();
        messageModel.message = message;
        messageModel.channelId = channelId;

        MESSAGES_STORAGE.push(messageModel);

        return messageModel;
    }
}
