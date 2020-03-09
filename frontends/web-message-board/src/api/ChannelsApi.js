import {API_URL} from "../utils";
import axios from 'axios';

export class ChannelsApi {
    async getChannels() {
        const response = await axios.get(`${API_URL}/channels`);
        return response.data;
    }

    async submitChannelMessage(message, channelId) {
        const response = await axios.post(`${API_URL}/${channelId}`, {message});
        return response.data;
    }
}
