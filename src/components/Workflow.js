import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Collapse} from 'react-collapse';
import { Bar } from 'react-chartjs-2'


export default function Workflow() {
    const [isOpen, setIsOpen] = useState(true)

    const onToggleCollapse = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }
    
      const data = {
        labels: ['In Queue', 'In Progress', 'Escalated', 'Closed'],
        datasets: [
          {
            data: [25, 18, 2, 16],
            backgroundColor: [
              '#1c84c6',
              '#1c84c6',
              '#1c84c6',
              '#1c84c6'
            ]
          },
        ],
      }
      
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 10
              },
            },
          ],
        },
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

    return <div className="workflow-block my-4">
        <Row className="workflow-title mx-0 pt-3 pb-1">
            <Col>
                <h5>WORKFLOW</h5>
                <div className="collapse-link" onClick={onToggleCollapse}>
                    <i className="fa fa-chevron-up"></i>
                </div>
            </Col>
        </Row>
        <div className="px-3">
            <Collapse isOpened={isOpen}>
                
                <Bar data={data} options={options} />
                
            </Collapse>
        </div>
    </div>
}
