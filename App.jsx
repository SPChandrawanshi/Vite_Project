import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
         className=" w-full h-screen duration-300 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-3 shadow-lg">
          <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded gap-3 shadow-lg " >
            <button onClick={()=>setColor("red")} className="outline-none" style={{backgroundColor:"red ", color:"white", padding:"5px",borderRadius:"18px", width:"10%"}}>Red</button>

            <button onClick={()=>setColor("gold")} className="outline-none" style={{backgroundColor:"gold ", color:"white", padding:"5px",borderRadius:"18px", width:"10%"}}>Gold</button>

            <button onClick={()=>setColor("skyblue")} className="outline-none" style={{backgroundColor:"skyblue ", color:"white", padding:"5px",borderRadius:"18px", width:"10%"}}>skyblue</button>

            <button onClick={()=>setColor("tomato")} className="outline-none" style={{backgroundColor:"tomato", color:"white", padding:"5px",borderRadius:"18px", width:"10%"}}>Tomato</button>

            <button onClick={()=>setColor("green")} className="outline-none" style={{backgroundColor:"green", color:"white", padding:"5px",borderRadius:"18px", width:"10%"}}>Green</button>

            <button onClick={()=>setColor("blue")} className="outline-none" style={{backgroundColor:"blue", color:"white", padding:"5px",borderRadius:"18px", width:"10%"}}>Blue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
