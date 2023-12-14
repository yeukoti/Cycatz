import Header from './components/VaccinationByGender'
import Chart from './components/CowinDashboard'
import Cowin from './components/VaccinationByAge'
import Tree from './components/VaccinationCoverage'
import ChartData from './components/Final'
import Map from './components/DomainMap'
import './App.css'

const App = () => (
  <>
    <Header />
    <div className="sector">
      <div className="chart">
        <p>Grade</p>
        <Chart />
      </div>
      <div className="chart">
        <p>Total detected issues -20</p>
        <Cowin />
      </div>
      <div className="chart">
        <p>Most critical Veinerability</p>
        <Tree />
      </div>
    </div>
    <div className="sector">
      <div className="chart2">
        <ChartData />
      </div>
      <div className="chart2">
        <Map />
      </div>
    </div>
  </>
)

export default App
