import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 43,
    language: 'Medium',
  },
  {
    count: 18,
    language: 'High',
  },
  {
    count: 28,
    language: 'Low',
  },
]

const Cowin = () => (
  <ResponsiveContainer width="80%" height={300}>
    <PieChart>
      <Pie
        cx="70%"
        cy="40%"
        data={data}
        startAngle={0}
        endAngle={360}
        innerRadius="40%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="Medium" fill="yellow" />
        <Cell name="High" fill="red" />
        <Cell name="Low" fill="green" />
      </Pie>
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
      />
    </PieChart>
  </ResponsiveContainer>
)

export default Cowin
