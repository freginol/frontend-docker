import React from 'react';
import {Link} from 'react-router-dom';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Advisor extends React.Component {
    constructor(){
      super();
      this.state = {
        isOpen:1,
        name:[],
        risk:[],
        term:[],
        delta:[],
        growth:[],
        revenue:[],
        data:{},
        arr:[],
  
      };
      this.percentage = 90;

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
      this.onToggleCollapse=this.onToggleCollapse.bind(this);
      this.getUser=this.getUser.bind(this); 
      
  }
  componentDidMount() {
    this.getUser();
  }



      
    
    onToggleCollapse() {
  
      this.setState({isOpen: this.state.isOpen ? 0: 1});
      


   }
   getUser() {
    console.log('enter getuser')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', '*');
  
    headers.append('GET', 'POST', 'OPTIONS');
    fetch('/hitlistout',{mode: "no-cors",header:headers})
    .then(response => {
      if(response.ok) return response.json();
      console.log('here is the response blahblah')
      console.log(response)
      throw new Error('Request failed.b bad boy');
    })
    .then(data => {
      console.log('dataman',data)
      this.setState({
        name:data['IA Name'],
        arr:data['IA ID'],
        risk:data['IA Risk Score'],
        term:data['S/M/L term'],
        delta:data['Increase/Decrease in Risk score(delta)'],
        growth:data['AUM growth %'],
        revenue:data['AUM(in million $)'],
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
      this.forceUpdate()
    })
    .catch(error => {
      console.log('omgggg')
      this.setState({name:"dontknow"})
      console.log(error);
    });
    
  }
    

    render()
    {
    return <Row className="advisor-link mx-0 py-3" onClick={() => {window.location = '/broker/'+this.props.datafromparent;}}>
        {/* <Link className="advisor-link py-3"> */}
            <Col xs="3" className="advisor-name my-auto">{this.state.name[this.props.datafromparent]}</Col>
            <Col xs="9" className="my-auto">
                <div className="percentage-circle align-middle mx-2">
                    <CircularProgressbar value={Math.ceil(this.state.risk[this.props.datafromparent]*100)} text={`${Math.ceil(this.state.risk[this.props.datafromparent]*100)}`}/> risk in 
                </div>
                <div className="term align-middle mx-2"> <div>{this.state.term[this.props.datafromparent]}</div> term</div>
                <div className="delta align-middle mx-2"> <div className="delta-up"><span className="align-middle d-inline-block mx-auto">{Math.ceil(this.state.delta[this.props.datafromparent]*100)}</span></div> </div>
                <div className="aum align-middle">
                    <span className="aum-text align-middle">AUM</span> 
                    <div className="align-middle">
                        <span className="my-1 px-2 text-center">{Math.ceil(this.state.growth[this.props.datafromparent])}% growth</span> 
                        <span className="my-1 px-2 text-center">${Math.ceil(this.state.revenue[this.props.datafromparent])}</span>
                    </div>
                </div>
                <div className="link-to-advisor my-2">
                    <i class="fa fa-chevron-right"></i>
                </div>
            </Col>
        {/* </Link> */}
    </Row>
}
}
export default Advisor;
