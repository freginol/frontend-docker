import React, {useState} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Collapse} from 'react-collapse';
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';

export default function IaBreakdown() {

    const [isOpen, setIsOpen] = useState(true)

    const onToggleCollapse = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }

    const legendStyle = {
        bottom: '40px',
        width: '350px',
        fontSize: '13px',
        color: '#676a6c',
        fontFamily: 'Helvetica'
    }

    // const labelStyle = {
    //     fontSize: '13px',
    //     color: '#fff',
    //     fontWeight: '600'
    // }

    const data = [
        { name: 'High risk (>80%)', value: 1178 },
        { name: 'Medium risk (50-80%)', value: 750 },
        { name: 'Low risk (<50%)', value: 190 }
      ];
      
      const COLORS = ['#18a689', '#f8ac59', '#ed5565'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
      }) => {
         const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return <ResponsiveContainer className="container">
        <div className="ia-breakdown-block my-4">
            <Row className="ia-breakdown-title mx-0 pt-3 pb-1">
                <Col>
                    <h5>IA BREAKDOWN</h5>
                    <div className="collapse-link" onClick={onToggleCollapse}>
                        <i className="fa fa-chevron-up"></i>
                    </div>
                </Col>
            </Row>
            <Collapse isOpened={isOpen}>
                <PieChart width={300} height={250}>
                    <Pie
                    data={data}
                    cx={120}
                    cy={100}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                    </Pie>
                    <Legend verticalAlign="bottom" align="center" height={16} wrapperStyle={legendStyle}/>
                </PieChart>
            </Collapse>
        </div>
    </ResponsiveContainer>
}
