import React, {Component} from 'react';
import Paper from "@material-ui/core/es/Paper/Paper";


class NameChangeAnnounce extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <div>
                    <h4>{this.props.newName && this.props.oldName
                        ? "Change: " + this.props.newName + " -> " + this.props.oldName
                        : "Will show most recent changes here..."}</h4>
                </div>
                <div>
                    {this.props.children}
                </div>
            </Paper>
        )
    }
}

export default NameChangeAnnounce;
