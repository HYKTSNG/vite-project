import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState(["", ""]); // 入力欄の値を保持する配列
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

  const handleCalculate = () => {
    // 入力欄の値の合計を計算する関数
    const sum = inputs.reduce((acc, val) => acc + Number(val), 0);
    setResult(sum);
  };

  return (
    <>
      <h1>Vite + React</h1>
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
        <button onClick={handleAddInput}>Add Input</button>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </>
  );
}

export default App;
