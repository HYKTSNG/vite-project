import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState([""]); // 入力欄の値を保持する配列
  const [donationLimit, setDonationLimit] = useState(0); // 寄付上限額を保持する状態変数
  const [result, setResult] = useState(0); // 合計値を保持する状態変数

  const handleInputChange = (index, value) => {
    // 入力欄の値が変更されたときに呼び出される関数
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    // 入力欄を追加するボタンがクリックされたときに呼び出される関数
    setInputs([...inputs, ""]);
  };

  const handleDonationLimitChange = (event) => {
    // 寄付上限額の入力欄の値が変更されたときに呼び出される関数
    setDonationLimit(Number(event.target.value));
  };

  const handleCalculate = () => {
    // 入力欄の値の合計を計算する関数
    const sum = inputs.reduce((acc, val) => acc + Number(val), 0);
    const donationAmount = Math.min(sum, donationLimit); // 寄付上限額と合計値のうち小さい方を寄付額とする
    setResult(donationAmount);
  };

  return (
    <>
      <h1>寄付上限額:{donationLimit}円</h1>

      <input
        type="number"
        value={donationLimit}
        onChange={handleDonationLimitChange}
      />
      <div className="card">
        {inputs.map((input, index) => (
          <div key={index}>
            <label htmlFor={`input${index}`}>Input {index + 1}:</label>
            <input
              type="number"
              id={`input${index}`}
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
        <p>Result: {result}</p>
        <p>Result: {donationLimit - result}</p>
        <button onClick={handleAddInput}>Add Input</button>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </>
  );
}

export default App;
