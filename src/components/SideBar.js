import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import TraiceLogo from '../assets/img/traice-logo.png';

export default class SideBar extends React.Component {
    render(){
      return <>
        <Nav id="sidebar">     
          {/* <div className="sidebar-header mx-auto py-4">
            <Image src={TraiceLogo} />
          </div> */}

          <ListGroup as="ul" className="list-unstyled components sidebar-menu">
            <li className="sidebar-header mx-0 py-4">
              <Image src={TraiceLogo} className="ml-3"/>
            </li>
            <li className="active">
              <a href="#" aria-expanded="false">
                  <i class="fa fa-dashboard"></i>
                  <span className="nav-label">DASHBOARD</span>
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-globe"></i>
                  <span className="nav-label">REGIONAL</span>
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-map-marker"></i>
                  <span className="nav-label">BRANCH</span>
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-user"></i>
                  <span className="nav-label">ADVISORS</span>                  
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-refresh"></i>
                  <span className="nav-label">SNAPSHOTS</span>                  
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-file-text-o"></i>
                  <span className="nav-label">CASES</span>                  
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-sliders"></i>
                  <span className="nav-label">THRESHOLDS</span>                  
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-code-fork"></i>
                  <span className="nav-label">WORKFLOW STATUS</span>                  
              </a>
            </li>
            <li>
              <a href="#">
                  <i class="fa fa-cog"></i>
                  <span className="nav-label">SETTINGS</span>                  
              </a>
              </li>
            <li>
              <a href="#">
                  <i class="fa fa-sign-out"></i>
                  <span className="nav-label">LOGOUT</span>                  
              </a>
            </li>
          </ListGroup>
        </Nav>

      </>
    }
    
}
