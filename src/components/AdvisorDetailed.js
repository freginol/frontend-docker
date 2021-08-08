import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Line } from 'react-chartjs-2';


import BlankAvatar from '../assets/img/blank_avatar.png';

    class AdvisorDetailed extends React.Component {
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
              avgtrade:[],
              los:[],
              household:[],
              clientroa:[],
              proacct:[],
              margin:[],
              personalroa:[],
              iaid:[],
              iaid3:[],
              anxiety:[],
              fulfillment:[],
              judgement:[],
              stars:[],
              kridescription:[],
              quartilevalue:[]
              
            
        
            };

            this.percentage = 90;

        

  
    
            this.getUser=this.getUser.bind(this); 
            this.getUser2=this.getUser2.bind(this); 
            this.getAllIndexes=this.getAllIndexes.bind(this)
            this.getUser3=this.getUser3.bind(this)
            this.display=this.display.bind(this)
            this.getUser4=this.getUser4.bind(this)

            
        }

        componentDidMount() {
            
          this.getUser();
          this.getUser2();
          
          

        }
        display()
        {
          var val=4 
          var name=" "
          console.log("position is",this.state.quartilevalue)
            for (let i = 0; i < this.state.quartilevalue.length; ++i) {
              if(this.state.quartilevalue[i]>10)
                name="position position-4"
              else if(this.state.quartilevalue[i]>5)
              name="position position-3"
              else if(this.state.quartilevalue[i]>3)
              name="position position-2"
              else
              name="position position-1"
              
                this.state.stars.push(                            <div className="kri">
                <div className={name}>
                    <i class="fa fa-caret-down"></i>
                </div>
                <span>{this.state.kridescription[i]}</span>
            </div>)
              }
        }
        getAllIndexes(arr, val) {
          var indexes = [], i = -1;
          while ((i = arr.indexOf(val, i+1)) != -1){
              indexes.push(i);
          }
          return indexes;
      }
    //let { id } = useParams();
/*
    const options = [
        { value: 'Ayden Lozano', label: 'Ayden Lozano' },
        { value: 'Sasha Potts', label: 'Sasha Potts' },
        { value: 'Tom Dickens', label: 'Tom Dickens' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    
    const percentage = 90;

    const data = {
        labels: ['May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Anxiety',
            data: [7, 17, 10, 20],
            fill: false,
            backgroundColor: '#ed5565',
            borderColor: '#ed5565'
          },
          {
            label: 'Fullfillment',
            data: [75, 67, 40, 38],
            fill: false,
            backgroundColor: '#f8ac59',
            borderColor: '#f8ac59'
          },
          {
            label: 'Judgement',
            data: [80, 67, 60, 58],
            fill: false,
            backgroundColor: '#18a689',
            borderColor: '#18a689'
          }
        ],
    }

    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                stepSize: 20
              }
            }
          ]
        },
        plugins: {
            datalabels: false
        },
        responsive: true,
        legend: {
            position: "bottom",
            align: "center",
        },
    }
    */
   getUser() {
    console.log('enter ====')
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
      this.getUser3();
      this.getUser4();
    })
    .catch(error => {
      console.log('omgggg')
      this.setState({name:"dontknow"})
      console.log(error);
    });
    
  }

  getUser2() {
    console.log('enter getuser')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', '*');
  
    headers.append('GET', 'POST', 'OPTIONS');
    fetch('/hitlistexpandedout',{mode: "no-cors",header:headers})
    .then(response => {
      if(response.ok) return response.json();
      console.log('here is the response blahblah')
      console.log(response)
      throw new Error('Request failed.b bad boy');
    })
    .then(data => {
      console.log('dataman',data)
      this.setState({
        los:data['LOS(yrs)'],
        avgtrade:data['Avg Trades(/month)'],
        personalroa:data['Personal ROA (in %)'],
        household:data['Households'],
        iaid:data['IA ID'],
        margin:data['Margin(in $K)'],
        proacct:data['Pro Acct(in million $)'],
        clientroa:data['Client ROA(%)']

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


  getUser3() {
    console.log('enter getuser')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', '*');
  
    headers.append('GET', 'POST', 'OPTIONS');
    //
    this.forceUpdate()
    fetch('/wellebeing2?user='+this.state.arr[this.props.match.params.id],{mode: "no-cors",header:headers})
    .then(response => {
      if(response.ok) return response.json();
      console.log('here is the response blahblah')
      console.log(response)
      throw new Error('Request failed.b bad boy');
    }) 
    .then(data => {
      console.log('datamman',data)
      this.setState({
        iaid3:data['IA ID'],
        anxiety:data['anxiety'],
        fulfillment:data['fulfillment'],
        judgement:data['judgement']

      })

      this.data = {
        labels: ['May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Anxiety',
            data: this.state.anxiety,
            fill: false,
            backgroundColor: '#ed5565',
            borderColor: '#ed5565'
          },
          {
            label: 'Fullfillment',
            data: this.state.fulfillment,
            fill: false,
            backgroundColor: '#f8ac59',
            borderColor: '#f8ac59'
          },
          {
            label: 'Judgement',
            data: this.state.judgement,
            fill: false,
            backgroundColor: '#18a689',
            borderColor: '#18a689'
          }
        ],
    }
    this.chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                stepSize: 20
              }
            }
          ]
        },
        plugins: {
            datalabels: false
        },
        responsive: true,
        legend: {
            position: "bottom",
            align: "center",
        },
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

  getUser4() {
    console.log('enter getuser')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', '*');
  
    headers.append('GET', 'POST', 'OPTIONS');
    //
    this.forceUpdate()
    fetch('/iakrimapping2?user2='+this.state.arr[this.props.match.params.id],{mode: "no-cors",header:headers})
    .then(response => {
      if(response.ok) return response.json();
      console.log('here is the response blahblah')
      console.log(response)
      throw new Error('Request failed.b bad boy');
    }) 
    .then(data => {
      console.log('datamman',data)
      this.setState({
        kridescription:data['KRI Description'],
        quartilevalue:data['Quartile value'],

      })

      
      console.log('favorite  food',this.state.kridescription,this.state.quartilevalue)
      this.forceUpdate();
      this.display();
    })
    .catch(error => {
      console.log('omgggg')
      this.setState({name:"dontknow"})
      console.log(error);
    });
    
  }

    render()
    {
      return <div>



        
      <Row className="advisor-detailed-block m-4">
            <Col xs="12" className="advisor-detailed-title mx-0 py-2 px-1">
                <Row>
                    <Col md="6" className="d-flex align-items-center">
                        <div className="go-back-link mr-2" onClick={() => {window.location = '/';}}>
                            <i className="fa fa-chevron-left"></i>
                        </div>
                        <h5 className="align-middle">BACK TO DASHBOARD</h5>
                    </Col>

                </Row>
            </Col>

            <Col xs="12">
                <Row className="advisor-link mx-0 py-3">
                    <Col md="3" className="advisor-detailed-name my-auto">
                    {this.state.name[this.props.match.params.id]}
                    </Col>
                    <Col md="9" className="pr-0">
                        <div className="float-right d-flex align-items-center">
                            <div className="percentage-circle advisor-scores-section align-middle ml-2 mr-4">
                                Risk Score:
                                <CircularProgressbar value={Math.ceil(this.state.risk[this.props.match.params.id]*100)} text={`${Math.ceil(this.state.risk[this.props.match.params.id]*100)}`}/>
                            </div>
                            <div className="term align-middle  advisor-scores-section ml-2 mr-4"> Risk Event term: <div>{(this.state.term[this.props.match.params.id])} </div> </div>
                            M/M Change in Score:<div className="delta align-middle advisor-scores-section ml-2 mr-4">  <div className="delta-up"><span className="align-middle d-inline-block mx-auto">{Math.ceil(this.state.delta[this.props.match.params.id])} </span></div> </div>
                            <div className="aum align-middle  advisor-scores-section ml-2 mr-0">
                                <span className="aum-text align-middle">AUM</span> 
                                <div className="align-middle">
                                    <span className="my-1 px-2 text-center">{Math.ceil(this.state.growth[this.props.match.params.id])}%  growth</span> 
                                    <span className="my-1 px-2 text-center">${Math.ceil(this.state.revenue[this.props.match.params.id])} </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row>
                    <Col md="2" className="advisor-avatar">
                        <Image src={BlankAvatar} />
                    </Col>
                    <Col md="10" className="pr-0">
                    <Card border="primary">
                        <Card.Header><span className="pull-left">Ranks 4/250 within region</span><span className="pull-right">Branch #2700-Richmond Hill Branch</span> </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col md="3">
                                        {this.state.los[this.state.iaid.indexOf(this.state.arr[this.props.match.params.id])]}<span>LOS (yrs)</span>
                                    </Col>
                                    <Col md="3">
                                    {this.state.household[this.state.iaid.indexOf(this.state.arr[this.props.match.params.id])]} <span>Households</span>
                                    </Col>
                                    <Col md="3">
                                    {this.state.avgtrade[this.state.iaid.indexOf(this.state.arr[this.props.match.params.id])]} <span>Avg. trades/mo.</span>
                                    </Col>
                                    <Col md="3">
                                    {Math.ceil(this.state.clientroa[this.state.iaid.indexOf(this.state.arr[this.props.match.params.id])])}% <span>Client ROA</span>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md="3">
                                        ${Math.ceil(this.state.proacct[this.state.iaid.indexOf(this.state.arr[this.props.match.params.id])])}M<span>Pro Acct</span>
                                    </Col>
                                    <Col md="3">
                                        ${this.state.margin[this.state.iaid.indexOf(this.state.arr[this.props.match.params.id])]}K<span>Margin</span>
                                    </Col>
                                    <Col md="3">
                                    {Math.ceil(this.state.personalroa[this.state.iaid.indexOf(this.state.arr[this.props.match.params.id])])}%<span>Personal ROA</span>
                                    </Col>
                                    <Col md="3">
                                       
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col md="6">
                        <h2 className="kri-title text-center">KEY RISK INDICATORS</h2>
                        <div className="kri-block">

                          {this.state.stars}
                        </div>
                        <Row>
                            <Col md="6" className="pl-0">
                                <Button variant="light" block>SAVE SNAPSHOT</Button>
                            </Col>
                            <Col md="6" className="pr-0">
                                <Button variant="light" block>OPEN CASE</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6" className="well-being-chart">
                        <h2 className="text-center well-being">WELL-BEING</h2>
                        <Line data={this.data} options={this.chartOptions} />
                    </Col>
                </Row>
        

      </div>
    
}
}
export default AdvisorDetailed;