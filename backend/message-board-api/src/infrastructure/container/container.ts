import {ChannelRepository} from "../database/repositories/channel-repository";
import {MessageRepository} from "../database/repositories/message-repository";

import {Container} from "inversify";

export const container = new Container({skipBaseClassChecks: true, autoBindInjectable: true});

container
    .bind(ChannelRepository)
    .toSelf()
    .inSingletonScope();

container
    .bind(MessageRepository)
    .toSelf()
    .inSingletonScope();
