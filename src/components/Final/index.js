import {BarChart, Bar, XAxis, YAxis} from 'recharts'

const data = [
  {name: 'Permission', value: 10},
  {name: 'Network Security', value: 20},
  {name: 'Certificate Analyse ', value: 30},
  {name: 'Manifest Analyse', value: 40},
  {name: 'Code Analyse', value: 50},
  {name: 'Domain Malware', value: 60},
  {name: 'App Data', value: 70},
  {name: 'Vulnerability', value: 80},
]

const ChartData = () => (
  <BarChart
    width={400}
    height={300}
    data={data}
    margin={{top: 20, right: 40, bottom: 50, left: 20}}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="value" fill="orange" />
  </BarChart>
)

export default ChartData
