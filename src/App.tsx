import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState([""]); // 入力欄の値を保持する配列
  const [donationLimit, setDonationLimit] = useState(0); // 寄付上限額を保持する状態変数
  const [result, setResult] = useState(0); // 合計値を保持する状態変数

  const handleInputChange = (index: number, value: string) => {
    // 入力欄の値が変更されたときに呼び出される関数
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    // 入力欄を追加するボタンがクリックされたときに呼び出される関数
    setInputs([...inputs, ""]);
  };

  const handleDonationLimitChange = (event: { target: { value: any } }) => {
    // 寄付上限額の入力欄の値が変更されたときに呼び出される関数
    setDonationLimit(Number(event.target.value));
  };

  useEffect(() => {
    // 入力欄の値や寄付上限額が変更されたときに合計値を計算する
    const sum = inputs.reduce((acc, val) => acc + Number(val), 0);
    setResult(Math.min(sum, donationLimit));
  }, [inputs, donationLimit]);

  return (
    <>
      <h1>ふるさと納税いくらできるのかな--</h1>
      <h2>寄付上限額: {donationLimit}円</h2>
      寄付上限額入力してね：
      <input
        type="number"
        value={donationLimit}
        onChange={handleDonationLimitChange}
      />
      <div className="card">
        {inputs.map((input, index) => (
          <div key={index}>
            <label htmlFor={`input${index}`}>
              購入物を入れてね {index + 1}:
            </label>
            <input type="text" id={`input${index}`} defaultValue="購入物" />
            <input
              type="number"
              id={`input${index}`}
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
        <p>購入金額: {result}</p>
        <p>残り可能金額: {Math.max(donationLimit - result, 0)}</p>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </>
  );
}

export default App;
