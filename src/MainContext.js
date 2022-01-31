import Education from "./MainContext/Education";
import WorkExp from "./MainContext/WorkExp";

function MainContext() {
    return (
      <div className="MainContext">
        <WorkExp/>
        <Education/>
      </div>
    );
  }
  
  export default MainContext;
  