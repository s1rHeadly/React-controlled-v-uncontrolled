import ControlledForm from "./Components/ControlledForm";

function App() {

  const getData = (data)  => {
      //taking in the data from the form
      // this function is passed as a prop into the Form Component
      console.log(data)
  }



  return (
    <div className="App">

     
     <ControlledForm onGetData={getData}/>

    </div>
  );
}

export default App;
