import './App.css';
 //----------------Imports
import {useState,useEffect} from 'react';

function App() {
  //-------------- Declare What Hooks Are Needed
  
  const [serviceType, setServiceType] = useState(``);
  const[count, setCount] = useState(0);

  let services = [
    {
   serviceType: "FoodHandle and Alcohol Server Training Course",
   image:(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMoxhEGTE_e9_lp2ngSiA7oXmIdEJQFPCuw&usqp=CAU`),
  //  image:(`https://www.cherylslastcall.com/images/alcohol-server-permit-waitress.gif`),
   }, 
   {
    serviceType: `Food Manager Procto Services`,
    image:(`https://cdn.statefoodsafety.com/blog/2019/08/proctor_supervise_examinee-compressor.jpg`),
    }, 
    {
      serviceType: `Notary Services`,
      image:(``),
      }, 
      {
        serviceType: `DJ Services`,
        image:(``),
        },    
   ]

   //--------------Declare What Functions Are Needed and how they specifically change the State

  //  const changeService = () => {
  //       setServiceType(services)
  //  }

   const changeCount = () => {
        setCount(count +1)
   }

   // using Hook Functions;   useEffect(() => {},[]) ----> {Renders a Function and Changes state *when Necessary* before the application loads (or) re-renders}
   useEffect(() => {
    setServiceType(services[count])
    console.log(serviceType)
   },
   [count])
  
  return (
    <div className="App">
      <title>www.sags.com</title>
      <h1> Welcome to Sparkle Access Global Services (SAGS)</h1>
      {/* //NarBar = Foodhandler/Alcohol training course;Food manager Procto Services;Notary Services; DJ services; */}
      <span> Who we Are </span>
      <p> SAGs is a service company providing you educational and entertainment services <br/> Click on the CHOOSE SERVICE button to browse through the different types of services we offer </p>
      <br/> <br/>
      <h2> Type of Service : {serviceType.serviceType} </h2>
      <img src={serviceType.image} alt='' />

      <div>
        <button onClick={changeCount}> CHOOSE SERVICE </button>
      </div>
      





    </div>
  );
}

export default App;
