import {ChannelModel, MessageModel} from "../../../core";
import {ChannelRepository, MessageRepository} from "../../../infrastructure";

import {SubmitMessageDto} from "./index-dto";

import {validateSync} from "class-validator";
import {Request, Response} from "express";
import {controller, httpGet, httpPost, request, response} from "inversify-express-utils";

@controller("")
export class IndexController {
    constructor(
        private readonly messageRepository: MessageRepository,
        private readonly channelRepository: ChannelRepository,
    ) {}

    @httpGet("/channels")
    public getChannels(): ChannelModel[] {
        return this.channelRepository.selectChannels();
    }

    @httpGet("/messages/:channelId")
    public getChannelMessages(@request() req: Request): MessageModel[] {
        const channelId = req.params.channelId;
        return this.messageRepository.selectMessages(channelId);
    }

    @httpPost("/:channelId")
    public submitChannelMessage(@request() req: Request, @response() res: Response): MessageModel {
        const submitMessageDto = new SubmitMessageDto(req.body.message, req.params.channelId);

        try {
            validateSync(submitMessageDto);
        } catch (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        return this.messageRepository.insertMessage(submitMessageDto.message, submitMessageDto.channelId);
    }
}
