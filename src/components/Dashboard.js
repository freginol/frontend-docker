import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TopNav from './TopNav';
import SideBar from './SideBar';
import Content from './Content';
import AdvisorsList from './AdvisorsList';
import IaBreakdown from './IaBreakdown';
import Workflow from './Workflow';
import HighRiskBranches from './HighRiskBranches';

export default class Dashboard extends React.Component {

  render(){
        return <>
          <Row className="dashboard">
            <Col md="6">
              <AdvisorsList />
            </Col>
            <Col md="6">
              <Row>
                <Col md="6">
                  <IaBreakdown />
                </Col>
                <Col md="6">
                  <Workflow/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <HighRiskBranches />
                </Col>
              </Row>
            </Col>
          </Row>
        </>
    }
    
}
