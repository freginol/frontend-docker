import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Collapse} from 'react-collapse';
import { HorizontalBar } from 'react-chartjs-2'
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';



class HighRiskBranches extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen:1,
      name:[],
      data:{},
      arr:[],

    };
    this.options = {
      maintainAspectRatio: false,
      responsive: true,

      legend: {
          display: false
       },
       plugins: {
           datalabels: false
       },
       layout: {
          padding: {
              left: 15,
              right: 15,
              top: 15,
              bottom: 15
          }
      }
    }

    // fix the this value
    
    this.onToggleCollapse=this.onToggleCollapse.bind(this);
    this.getUser=this.getUser.bind(this); 
  
    //this.dataset=this.dataset.bind(this);
    //this.dataset();


   //console.log("music4",this.state.data.labels);
      
      
   //console.log('crap4',this.state.data.datasets[0].data)

  }
  componentDidMount() {
    this.getUser();
  }




  getUser() {
    console.log('enter getuser')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', '*');
  
    headers.append('GET', 'POST', 'OPTIONS');
    fetch('/branchbinned2',{mode: "no-cors",header:headers})
    .then(response => {
      if(response.ok) return response.json();
      console.log('here is the response blahblah')
      console.log(response)
      throw new Error('Request failed.b bad boy');
    })
    .then(data => {
      console.log('dataman',data)
      this.setState({
        name:data['Branch #'],
        arr:data['IA Risk Score'],
        isOpen:this.state.isOpen ? 1: 0

      })
      this.state.arr=this.state.arr.map(x=> Math.round(x*100),2);//converting to percentages
      this.state.name=this.state.name.map(x=> x.replace('Branch',''));

      this.state.data = {
        labels: this.state.name,
        datasets: [
          {
            data: this.state.arr,
            backgroundColor: [
  
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6'

      
            ]
          },
        ],
      } 
      
      console.log('branch num',this.state.name,this.state.arr)
      this.forceUpdate()
    })
    .catch(error => {
      console.log('omgggg')
      this.setState({name:"dontknow"})
      console.log(error);
    });
    
  }
  
  onToggleCollapse() {

    this.setState({isOpen: this.state.isOpen ? 0: 1});
    
   // this.dataset();

 
    console.log("music2",this.state.data.labels);
    
    
    console.log('crap2',this.state.data.datasets[0].data)

 }















      
    
render()
{

    return <div className="highrisk-branches-block my-2">
        <Row className="highrisk-branches-title mx-0 pt-3 pb-1">
            <Col>
                <h5>HIGH RISK BRANCHES</h5>
                
                <div className="collapse-link" onClick={this.onToggleCollapse}>
                
                    <i className="fa fa-chevron-up"></i>
                </div>
            </Col>
        </Row>
        <div className="px-3" >

            <Collapse isOpened={this.state.isOpen} >
              
                <HorizontalBar 
                data={this.state.data} options={this.options} />
            </Collapse>
        </div>
    </div>
}
}
export default HighRiskBranches;
