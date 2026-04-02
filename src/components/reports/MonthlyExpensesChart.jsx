import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

const data = [
  { name: 'Jan', expenses: 4000 },
  { name: 'Feb', expenses: 3000 },
  { name: 'Mar', expenses: 2000 },
  { name: 'Apr', expenses: 2780 },
  { name: 'May', expenses: 1890 },
  { name: 'Jun', expenses: 2390 },
];

const MonthlyExpensesChart = () => {
  return (
    <Card>
      <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Monthly Expenses</h3>
      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(val) => `$${val}`} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => `$${value}`} cursor={{fill: '#f1f5f9'}} />
            <Legend />
            <Bar dataKey="expenses" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MonthlyExpensesChart;
