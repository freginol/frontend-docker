import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'normalize.css';
import SideBar from './SideBar';
import TopNav from './TopNav';
import Dashboard from './Dashboard';
import AdvisorDetailed from './AdvisorDetailed';

import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';

export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
    }

    onToggleSideBar = () => {
      document.querySelector('#sidebar').classList.toggle('active');
    }

    render() {
        return <BrowserRouter>
                <div className="wrapper">
                    <SideBar/>
                    <div id="content">
                        <TopNav onPressToggle={this.onToggleSideBar} />
                        <Switch>
                            <Route exact path="/" component={Dashboard} /> 
                            <Route exact path="/Broker/:id" component={AdvisorDetailed} /> 
                        </Switch>    
                    </div>        
                </div>
            </BrowserRouter>

    }
    
        
}