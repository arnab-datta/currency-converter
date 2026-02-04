import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  cosnt[(from, setFrom)] = useState("usd");
  cosnt[(to, setFTo)] = useState("inr");
  cosnt[(convertedAmount, setConvertedAmount)] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <h1>Currency Converter</h1>
    </>
  );
}

export default App;
