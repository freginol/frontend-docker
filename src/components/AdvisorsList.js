import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Collapse} from 'react-collapse';

import Advisor from './Advisor';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

class AdvisorsList extends React.Component {
    constructor(){
      super();
      this.state = {
        data:5,
        isOpen:1,
        stars:[]
      };
      this.onToggleCollapse=this.onToggleCollapse.bind(this);
      this.display=this.display.bind(this);
      this.display();
      
    }

    display()
    {
        for (let i = 0; i < 31; ++i) {
            this.state.stars.push(<Advisor  datafromparent={i}></Advisor>)
          }
    }

    onToggleCollapse() {

  
        this.setState({isOpen: this.state.isOpen ? 0: 1});
        //this.state.isOpen=this.state.isOpen ? 0: 1
        console.log('toggling')
        console.log((this.state.isOpen))
    }
        //this.getUser();
  
  
     

    render()
    {
    return <div className="advisors-list my-4"> 
            <Row className="advisors-list-title mx-0 pt-3 pb-1">
                <Col>
                    <h5>HIT LIST</h5>
                    <div className="collapse-link" onClick={this.onToggleCollapse}>
                        <i className="fa fa-chevron-up"></i>
                    </div>
                </Col>
            </Row>
            <Collapse isOpened={this.state.isOpen}>
            <div className="advisors-body">

      
                {this.state.stars}
                

            </div>
            
            
    </Collapse>


    </div>
}
}
export default AdvisorsList;
