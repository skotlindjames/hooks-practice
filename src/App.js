import { useState, useEffect, createContext } from "react";
import "./App.css";
import State from './components/State'


const state = {
  excited: "lets keep learning",
  tired: " sleepy time"
}

export const StateContext = createContext(state)



function App() {


  const [resourceType, setResourceType] = useState("todos");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(0)
  console.log(items);

  console.log("rendered");

  //application programming interface 
  // communicates with the use  and the database
  // all you can eat sushi menu, server, and kitchen are like an api fetch call

  useEffect(() => {
    //is a request to the api that returns a promise 
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setCount(json.length);
      });
  }, [resourceType]);



  return (
    <div className="App">
      <StateContext.Provider value = { state.tired}>
<State/>
</StateContext.Provider>
     

      <div>
        <button
          onClick={() => {
            setResourceType("todos");
          }}
        >
          todos{" "}
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
      </div>
      <h1> {count} </h1>
      {/* <h1>{items.length}</h1> easy correct way s */}
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <p>{JSON.stringify(item)}</p>;
      })}
    </div>
  );
}

export default App;
