import React, { Component } from 'react';
import Student from '../components/Student';
import StudentService from '../services/student_service'
import Grid from '@material-ui/core/Grid';
import NameChangeAnnounce from '../components/NameChangeAnnounce'
import {name_change_mode, search_mode, student_list_route} from "../routes";
import NameSearch from "../components/NameSearch";
import withRouter from "react-router-dom/es/withRouter";
import Link from "react-router-dom/es/Link";


class StudentList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: [],
            newestName: null,
            oldName: null
        }
    }

    componentDidMount() {
        StudentService.getStudents()
            .then(resp => resp ? this.setState({students: resp.students}) : this.setState({students: []}))
            .catch(err => console.log(err));
    }

    announceNameChange(student_id, new_name) {
        let newState = this.state;
        newState.students = newState.students.map((student) => {
            let tmp = student;
            if (student.student_id === student_id) {
                newState.newestName = new_name;
                newState.oldName = tmp.name;
                console.log(tmp);
                console.log(newState.newestName, newState.oldName);
                tmp.highlight = true;
                tmp.name = new_name;
                return tmp;
            } else {
                tmp.highlight = false;
                return tmp;
            }
        });

        this.setState(newState);
    }

    search(search_term) {

    }


    render() {
        let header = null;
        let link = [];
        let base_path = '/' + student_list_route + '/';
        if (this.props.location.pathname === base_path + name_change_mode) {
            header = (
                <div>
                    <NameChangeAnnounce newName={this.state.newestName} oldName={this.state.oldName}>
                        <Link to={base_path + search_mode}>Search</Link>
                    </NameChangeAnnounce>
                </div>
            );
        } else if (this.props.location.pathname === base_path + search_mode) {
            header = (
                <div>
                    <NameSearch onSearch={(search_term) => this.search(search_term)}>
                        <Link to={base_path + name_change_mode}>Name Change</Link>
                    </NameSearch>
                </div>
            );
        } else {
            header = (
                <div>
                    <div>
                        <h4>Invalid route</h4>
                    </div>
                    <div>
                        <Link to={base_path + name_change_mode}>Name Change</Link>
                    </div>
                    <div>
                        <Link to={base_path + search_mode}>Search</Link>
                    </div>
                </div>
            );
            console.log(this.props.location);
        }
        return (
            <Grid container justify="center" direction={'column'} alignContent={'center'}>
                <Grid container justify="center" direction={'column'} alignContent={'center'}>
                    <Grid item xs={6}>
                        {header}
                    </Grid>
                </Grid>
                <Grid container justify="center" direction={'column'} alignContent={'center'}>
                    {this.state.students ? this.state.students.map((student, index) => {
                        return <Student key={index} student={student} changeName={(new_name) => this.announceNameChange(student.student_id, new_name)}/>
                    }) : <h5>No Students in list</h5>}
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(props =><StudentList {...props}/>);