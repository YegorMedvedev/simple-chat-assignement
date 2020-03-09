import {IsString, IsUUID} from "class-validator";

export class SubmitMessageDto {
    // HACK: could be done in other way
    constructor(message: string, channelId: string) {
        this.message = message;
        this.channelId = channelId;
    }

    @IsString()
    message: string;

    @IsUUID("4")
    channelId: string;
}
