import React, {useState} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Collapse} from 'react-collapse';
import { Pie } from 'react-chartjs-2';

import ChartDataLabels from 'chartjs-plugin-datalabels';




class IaBreakdown extends React.Component {
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
          display: true,
          position:'bottom',
          align: "right",
          fullWidth:true
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

  
    //const [isOpen, setIsOpen] = useState(true)


     getUser() {
      console.log('enter kijiji')
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
    
      headers.append('Access-Control-Allow-Origin', '*');
    
      headers.append('GET', 'POST', 'OPTIONS');
      fetch('/branchbinned',{mode: "no-cors",header:headers})
      .then(response => {
        if(response.ok) return response.json();
        console.log('here is the response blahblah')
        console.log(response)
        throw new Error('Request failed.b bad boy');
      })
      .then(data => {
        console.log('dataman',data)
        this.setState({
          name:data['risk_bin'],
          arr:data['Branch #'],
          isOpen:this.state.isOpen ? 1: 0

        })
  
        this.state.data = {
          labels: this.state.name,
          datasets: [
            {
              data: this.state.arr,
              backgroundColor: [
    
                '#ed5565',
                '#f8ac59',
                '#18a689',
        
              ]
            },
          ],
        } 
        
        console.log('branch num',this.state.name,this.state.arr)
        console.log('break every name',this.state.name)
        this.forceUpdate();
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

   


   }

  
    
  
      
    
render()
{

  return <div className="ia-breakdown-block my-4" >
  
   <Row className="ia-breakdown-title mx-0 pt-3 pb-1" >
      <Col>
          <h5>IA BREAKDOWN</h5>
          <div className="collapse-link" onClick={this.onToggleCollapse}>
              <i className="fa fa-chevron-up"></i>
          </div>
      </Col>
  </Row> 
  <div className="px-3">
  <Collapse isOpened={this.state.isOpen}>
      <Pie data={this.state.data} options={this.options}/>
  </Collapse>
  </div>
</div>
}
}
export default IaBreakdown;





