import {API_URL} from "../utils";
import axios from 'axios';

export class MessagesApi {
    async getMessages(channelId) {
        const response = await axios.get(`${API_URL}/messages/${channelId}`);
        return response.data;
    }
}
