import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import React from 'react';
import {action, type} from "../index.constants";

const waterIcon = require('../res/images/water.svg');
const foodIcon = require('../res/images/food.svg');

class Logs extends React.Component {

    getLogList = () => {
        const logList = [];
        const seenTimestamps = [];
        const convertToSuitableDateString = (timestamp) => new Date(timestamp).toDateString();
        const getInfoByAction = (log) => {
            let info = {};
            switch(log.type) {
                case type.WATER:
                    log.action === action.DECREMENT ?
                        info = {'verb': 'Drank', 'metric': 'ml', 'performedBy': 'glass(s)'} :
                        info = {'verb': 'Lost', 'metric': 'ml', 'performedBy': 'glass(s)'};
                    info.icon = waterIcon;
                    break;
                case type.CALORIE:
                    log.action === action.INCREMENT ?
                        info = {'verb': 'Gained', 'metric': '', 'performedBy': 'calories'} :
                        info = {'verb': 'Burnt', 'metric': '', 'performedBy': 'calories'};
                    info.icon = foodIcon;
                    break;
                default:
                    return {};
            }
            return info;
        };
        const isNewDateLog = (_log) => !seenTimestamps.find((l) => convertToSuitableDateString(_log.timestamp) === convertToSuitableDateString(l));
        for (let i = 0; this.props.logs.length > i; i++) {
            const _log = this.props.logs[i];
            if(isNewDateLog(_log)) {
                logList.push(<Subheader>{`${convertToSuitableDateString(_log.timestamp)}`}</Subheader>);
                seenTimestamps.push(convertToSuitableDateString(_log.timestamp));
            }
            const {verb, metric, performedBy, icon} = getInfoByAction(_log);
            logList.push(<ListItem key={i}
                primaryText={`${verb} ${_log.by} ${performedBy}`}
                leftAvatar={<Avatar src={icon}/>}
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
            <FlatButton
                label="Clear Logs"
                primary={false}
                onClick={this.props.onClear}
            />
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
