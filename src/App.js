import './App.css';
 //----------------Imports
import {useState,useEffect} from 'react';

function App() {
  //-------------- Declare What Hooks Are Needed
  const [service, setService] = useState('');
  const[count, setCount] = useState(0);

  const services = [
    {
   serviceType: `FoodHandle and Alcohol Training Course`,
   image:(``)
   }, 
   {
    serviceType: `Food Manager Procto Services`,
    image:(``)
    }, 
    {
      serviceType: `Notary Services`,
      image:(``)
      }, 
      {
        serviceType: `DJ Services`,
        image:(``)
        },    
   ]

   //--------------Declare What Functions Are Needed and how they specifically change the State

   const changeService = () => {
        setService(service)
   }

   const changeCount = () => {
        setCount(count +1)
   }
   
  return (
    <div className="App">
      <title>www.sags.com</title>
      <h1> Welcome to Sparkle Access Global Services (SAGS)</h1>
      {/* //NarBar = Foodhandler/Alcohol training course;Food manager Procto Services;Notary Services; DJ services; */}
      <span> Who we Are </span>
      <p> SAGs is a service company providing you educational and entertainment services <br/> Click on the CHOOSE SERVICE button to browse through the different types of services we offer </p>
      <br/> <br/>
      <h2> Type of Service : {service.serviceType} </h2>
      <img src={services.image} alt='' />

      <div>
        {/* <button onClick={} > CHOOSE SERVICE </button> */}
      </div>
      





    </div>
  );
}

export default App;
