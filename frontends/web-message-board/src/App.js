import React from 'react';
import './styles/App.css';
import Channels from "./components/Channels";
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";
import {ChannelsApi} from "./api/ChannelsApi";
import {MessagesApi} from "./api/MessagesApi";

export default class Application extends React.Component {
    constructor(props) {
        super(props);
        this.channelsApi = new ChannelsApi();
        this.messagesApi = new MessagesApi();
        this.handleChannelChange = this.handleChannelChange.bind(this);
        this.handleMessageSubmission = this.handleMessageSubmission.bind(this);
        this.state = {channelId: null, disableForm: true, channels: [], messages: []};
    }

    render() {
        return (
            <div className="mainWrapper">
                <Channels
                    channels={this.state.channels}
                    onChannelChosen={this.handleChannelChange}
                />
                <hr/>
                <MessagesList
                    messages={this.state.messages}
                />
                <hr/>
                <MessageForm
                    disableForm={this.state.disableForm}
                    onFormSubmitted={this.handleMessageSubmission}
                />
            </div>
        );
    }

    async componentDidMount() {
        try {
            const channels = await this.channelsApi.getChannels();
            this.setState({channels})
        } catch (e) {
            console.error("Couldn't get channels", e)
        }
    }

    async handleChannelChange(channelId) {
        if (channelId === "") {
            return;
        }

        try {
            const messages = await this.messagesApi.getMessages(channelId);
            this.setState({messages, channelId, disableForm: false});
        } catch (e) {
            console.error("Couldn't get messages", e)
        }
    }

    async handleMessageSubmission(message) {
        console.log(message);
        console.log(this.state.channelId);

        try {
            const newMessage = await this.channelsApi.submitChannelMessage(message, this.state.channelId);
            this.setState(prevState => ({
                messages: [...prevState.messages, newMessage]
            }))
        } catch (e) {
            console.error("Couldn't submit a message", e)
        }
    }
}
