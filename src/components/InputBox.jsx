import { useId } from "react";

function InputBox({
  label = "label",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency,
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();

  return (
    <div className="w-full rounded-md bg-white p-4">
      <div className="flex justify-between">
        <label htmlFor={id}>{label}</label>
        <p>Currency Type</p>
      </div>
      <div className="flex justify-between">
        <input
          type="text"
          id={id}
          className="border border-gray-300 bg-gray-100 text-lg"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />

        <select
          name="cars"
          id="cars"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className="rounded-lg p-1 outline-none"
        >
          {currencyOptions.map((curr, i) => (
            <option key={i} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
