import React, { Component } from 'react';
import Paper from "@material-ui/core/es/Paper/Paper";


class NameSearch extends Component {
    constructor(props){
        super(props);

        this.state = {
            cur_term: ""
        }
    }

    onChange(event) {
        this.setState({cur_term: event.target.value})
    }

    render() {
        return (
            <Paper>
                <div>
                    <input type={'text'} value={this.state.cur_term} onChange={this.onChange.bind(this)}/>
                    <button onClick={() => this.props.onSearch(this.state.cur_term)}>Search</button>
                </div>
                <div>
                    {this.props.children}
                </div>
            </Paper>
        )
    }

}

export default NameSearch;
