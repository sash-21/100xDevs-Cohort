import { createContext, useContext, useState } from "react";

const BulbContext = createContext()

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </BulbContext.Provider>
  </div>
}

function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>
    {bulbOn  ? "Bulb On" : "Bulb Off"}
  </div>
}

function LightSwitch() {
  const {setBulbOn} = useContext(BulbContext);
  function toggleBulb() {
    setBulbOn(b => !b)
  }

  return <div>
    <button onClick={toggleBulb}>Toggle Bulb</button>
  </div>
}

export default App;