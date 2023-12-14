import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 20,
    language: 'A',
  },
  {
    count: 20,
    language: 'B',
  },
  {
    count: 20,
    language: 'C',
  },
  {
    count: 20,
    language: 'D',
  },
]

const Tree = () => (
  <ResponsiveContainer width="80%" height={300}>
    <PieChart width={1000} height={300}>
      <Pie
        cx="50%"
        cy="60%"
        data={data}
        startAngle={180}
        endAngle={0}
        innerRadius="30%"
        outerRadius="60%"
        dataKey="count"
      >
        <Cell name="A" fill="red" />
        <Cell name="B" fill="yellow" />
        <Cell name="C" fill="blue" />
        <Cell name="D" fill="green" />
      </Pie>
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
        wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
      />
    </PieChart>
  </ResponsiveContainer>
)

export default Tree
