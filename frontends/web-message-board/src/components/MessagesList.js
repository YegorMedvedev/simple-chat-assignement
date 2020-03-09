import * as React from "react";

export default class MessagesList extends React.Component {
    render() {
        let messagesLayout;
        if (this.props.messages.length) {
            messagesLayout = <ul>
                {this.props.messages.map(message => (<li key={message.id}>{message.message}</li>))}
            </ul>
        } else {
            messagesLayout = <small>No messages so far...</small>;
        }

        return <div>
            <p>Messages List</p>
            {messagesLayout}
        </div>
    }
}
