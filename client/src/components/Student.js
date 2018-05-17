import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/es/Paper/Paper";


class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_name: ""
        }
    }

    nameChange(event) {
        // Callback to parent
        this.props.changeName(this.state.new_name);
        this.setState({new_name: ""});
    }

    changeNewName(event) {
        this.setState({new_name: event.target.value})
    }

    render() {
        let student = this.props.student;
        return (
            <Grid item xs={6}>
                <Paper>
                    <p>Student ID: {student.student_id}</p>
                    <p>Student Name: {student.name}</p>
                    <p>Student Course: {student.course}</p>
                    <input type={"text"} value={this.state.new_name} onChange={this.changeNewName.bind(this)}/>
                    <button onClick={this.nameChange.bind(this)}>Submit</button>
                </Paper>
            </Grid>
        )
    }


}

export default Student;