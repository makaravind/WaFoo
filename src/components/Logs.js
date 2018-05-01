import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import React from 'react';

const styles = {
    radioButton: {
        marginTop: 16,
    },
};

class Logs extends React.Component {

    getLogList = () => {
        const logList = [];
        const seenTimestamps = [];
        const convertToSuitableDateString = (timestamp) => new Date(timestamp).toDateString();
        const getLogStringByAction = (log) => {
            let verbs = {};
            switch(log.type) {
                case "water":
                    log.action === 'increment' ?
                        verbs = {'verb': 'Drank', 'metric': 'ml', 'performedBy': 'glass(s)'} :
                        verbs = {'verb': 'Lost', 'metric': 'ml', 'performedBy': 'glass(s)'};
                    break;
                case "calorie":
                    log.action === 'increment' ?
                        verbs = {'verb': 'Gained', 'metric': '', 'performedBy': 'calories'} :
                        verbs = {'verb': 'Burnt', 'metric': '', 'performedBy': 'calories'};
                    break;
                default:
                    return {};
            }
            return verbs;
        };
        for (let i = 0; this.props.logs.length > i; i++) {
            const _log = this.props.logs[i];
            if(!seenTimestamps.find((l) => convertToSuitableDateString(_log.timestamp) === convertToSuitableDateString(l))) {
                logList.push(<Subheader>{`${convertToSuitableDateString(_log.timestamp)}`}</Subheader>);
                seenTimestamps.push(convertToSuitableDateString(_log.timestamp));
            }
            const {verb, metric, performedBy} = getLogStringByAction(_log);
            logList.push(<ListItem
                primaryText={`${verb} ${_log.by} ${performedBy}`}
                leftAvatar={<Avatar src="images/ok-128.jpg"/>}
            />);
        }
        return logList;
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.onClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Your Log"
                    actions={actions}
                    modal={false}
                    open={this.props.open()}
                    onRequestClose={this.props.onClose}
                    autoScrollBodyContent={true}
                >
                    {this.props.logs.length <= 0 && <p>There is no much of an actions...</p>}
                    {this.props.logs.length > 0 && <List>{this.getLogList()}</List>}
                </Dialog>
            </div>
        );
    }
}

export default Logs
