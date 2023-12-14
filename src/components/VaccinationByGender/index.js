import './index.css'

const Header = () => (
  <>
    <div className="boarder">
      <div className="first">
        <p className="para">Android</p>
        <p className="para">IOS</p>
      </div>
      <div className="first">
        <p className="para">Version</p>
        <p className="para">11.4.3</p>
      </div>
      <div className="first">
        <button type="button" className="button">
          Upload & view
        </button>
      </div>
    </div>

    <div className="second-layout">
      <div className="second">
        <h1>APP SCORES</h1>
        <p>Security : 47/100</p>
        <p>Trackers Detection: 2/42B</p>
      </div>
      <div className="second2">
        <h1>File Information</h1>
        <p>File Name : NH_Care___consult_a_Doctor_2191.apk</p>
        <p>Size : 105.56MB</p>
        <p>MD5 : bc515cge216ae02d669a3c7daeee201</p>
        <p>SHA1 : 98a1421d93331c5da6391af1701310gt</p>
        <p>SHA256 : SHA256 DBC4251E5B77F15D5Rf345678d</p>
      </div>
      <div className="second3">
        <h1>APP INFORMATION</h1>
        <p>App Name : NH care</p>
        <p>Packing Name : org Narayanahealthcare</p>
        <p>Main Activity : org narayanahealth.mainActivity</p>
        <p>Target SDK : 32 Min SDK:21</p>
        <p>Andriod Version Name :2193 Android Version Code:52</p>
      </div>
    </div>
  </>
)

export default Header
