import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Answer from './components/Answer';

function App() {
  let info=[
    {
      name:"prashant",
      place:"india",
      infox:{
        a:1,
        b:2,
      },
    },
    {name:"Aman",place:"USA"},
    {name:"raju",place:"Australia"},
    {name:"Anurag",place:"India"},
    {name:"Anuj",place:"portgal"},
    {name:"jaskuu",place:"Uganda"},
    {name:"angola",place:"japan"},
    {name:"Auhoo",place:"canada"},
  ]

  


  return (
    <div className="App">
    
        {/* <Hello> </Hello> */}
   
        {info.map((user) => (

           <div>
            <h1>New:1</h1>
            <Answer{...user}/>
           </div>
        ))}      
    </div>
  );
}

export default App;
