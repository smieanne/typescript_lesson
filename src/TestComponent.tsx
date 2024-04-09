//rafce テンプレート

import React, { useState } from 'react'

interface Props {
  text: string
}
interface UserData {
  id: number;
  name: string;
}

//React Hooks useState
const TestComponent:React.FC<Props> = (prpps) => {
  const [count, setCount] = useState<number | null >(null); //useStateで初期値を0で与えると、ステート関数をステートを更新した時の関数を返す
  const[user, setUser] = useState<UserData>({ id: 1, name:"dummy"});
  const[inputData, setInputData] = useState(""); //空の文字列で初期化（string）

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setInputData(e.target.value);


  return (
    <div>
      <h1>{prpps.text}</h1>
      <h1>{count}</h1>
      <input type= "text" value={inputData} onChange={handleInputChange}/>
      <h1>{inputData}</h1>
    </div>
  )
}

export default TestComponent
