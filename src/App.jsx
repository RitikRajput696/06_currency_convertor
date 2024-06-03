import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currOptions = useCurrencyInfo(from);
  const currencyNames = Object.keys(currOptions);

  const swap = () => {
    setFrom(to);
    setTo(from);
    // fuck i donot know why this part of swapping is not working
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  function convert() {
    setConvertedAmount(amount * currOptions[to]);
  }

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <form
        className="flex w-full max-w-xl flex-col gap-4 rounded-lg border p-4 backdrop-blur-3xl"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="from"
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(curr) => setFrom(curr)}
          amountDisabled={false}
          selectedCurrency={from}
          currencyOptions={currencyNames}
        />
        <div className="relative w-full">
          <button
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-blue-700 p-2 text-white"
            onClick={swap}
          >
            Swap
          </button>
        </div>
        <InputBox
          label="to"
          amount={convertedAmount}
          onAmountChange={(amount) => setConvertedAmount(amount)}
          onCurrencyChange={(curr) => setTo(curr)}
          selectedCurrency={to}
          currencyOptions={currencyNames}
        />
        <button type="submit" className="rounded-md bg-blue-600 p-2 text-white">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
