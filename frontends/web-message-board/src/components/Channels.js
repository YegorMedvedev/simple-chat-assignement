import * as React from "react";

export default class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.handleChannelButtonClick = this.handleChannelButtonClick.bind(this);
    }

    render() {
        return <div>
            {this.props.channels.map(channel => (
                <button key={channel.id} onClick={this.handleChannelButtonClick} id={channel.id}>{channel.name}</button>
            ))}
        </div>
    }

    handleChannelButtonClick(event) {
        this.props.onChannelChosen(event.target.id);
    }
}
