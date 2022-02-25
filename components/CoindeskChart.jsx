import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CoindeskChart = ({ chartData }) => {
  return (
    <React.Fragment>
      <BarChart
        width={300}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='code' />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey='rate' fill='#8884d8' /> */}
        <Bar dataKey='rate_float' fill='#82ca9d' />
      </BarChart>
    </React.Fragment>
  );
};

export default CoindeskChart;
