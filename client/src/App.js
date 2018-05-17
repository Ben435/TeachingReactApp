import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './containers/StudentList';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Link from "react-router-dom/es/Link";
import {student_list_route} from "./routes";



const Index = () => {
    return (
        <div className={'App'}>
            <div>
                <Link to={'/' + student_list_route + '/'}>Name Change</Link>
            </div>
        </div>
    )
};

const StudentListPage = () => {
  return (
      <div className={'App'}>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <StudentList/>
      </div>
  )
};

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={'/'} component={Index}/>
        <Route path={'/' + student_list_route + '/:mode?'} component={StudentListPage}/>
      </Switch>
    );
  }
}

export default App;
