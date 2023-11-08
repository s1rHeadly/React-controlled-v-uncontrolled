import ControlledForm from "./Components/ControlledForm";
import UncontrolledForm from "./Components/UncontrolledForm";

function App() {

  const getData = (e)  => {
    e.preventDefault();
    console.log()
  }
  return (
    <div className="App">

     
     <ControlledForm onSubmit={getData}/>

    </div>
  );
}

export default App;
