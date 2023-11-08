import ControlledForm from "./Components/ControlledForm";

function App() {

  const getData = (data)  => {
      console.log(data)
  }
  return (
    <div className="App">

     
     <ControlledForm onGetData={getData}/>

    </div>
  );
}

export default App;
