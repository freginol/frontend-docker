import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Collapse} from 'react-collapse';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


export default function Workflow() {
    const [isOpen, setIsOpen] = useState(true)

    const onToggleCollapse = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }

    
    const data = [
        {
          name: 'In Queue', value: 25,
        },
        {
          name: 'In Progress', value: 18,
        },
        {
          name: 'Escalated', value: 2,
        },
        {
          name: 'Closed', value: 16,
        }
      ];

    return <ResponsiveContainer className="container">
    <div className="ia-workflow-block my-4">
        <Row className="ia-workflow-title mx-0 pt-3 pb-1">
            <Col>
                <h5>WORKLOW</h5>
                <div className="collapse-link" onClick={onToggleCollapse}>
                    <i className="fa fa-chevron-up"></i>
                </div>
            </Col>
        </Row>
            <Collapse isOpened={isOpen}>
                
                    <BarChart
                        width={300}
                        height={250}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 0, bottom: 5,
                        }}
                        barSize={50}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" tick={{fontSize: 13}}/>
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="value" fill="#1c84c6" />
                    </BarChart>
                
            </Collapse>
    </div>
    </ResponsiveContainer>
}
