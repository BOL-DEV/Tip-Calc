import { useState } from "react";
import "./App.css";
import Bill from "./bill.js";
import FirstTip from "./tips.js";
import Total from "./total.js";
import Reset from "./reset.js";

function App() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const handleBill = (e) => {
    setBill(+e.target.value);
  };

  const tip = (tip1 + tip2) / 2;

  const handleReset = () => {
    setBill("");
    setTip1(0);
    setTip2(0);
  };

  return (
    <div>
      <Bill bill={bill} handleBill={handleBill} />
      <FirstTip tip={tip1} handleTip={setTip1} >How did you like the service?</FirstTip>
      <FirstTip tip={tip2} handleTip={setTip2} >How did your friend like the service?</FirstTip>
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
