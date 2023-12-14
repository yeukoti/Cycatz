import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts'

const data = [
  {name: 'High', value: 6},
  {name: 'Medium', value: 10},
  {name: 'Low', value: 4},
]

const Chart = () => (
  <BarChart
    width={300}
    height={300}
    data={data}
    margin={{top: 20, right: 100, bottom: 50, left: 20}}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="green" />
  </BarChart>
)

export default Chart
