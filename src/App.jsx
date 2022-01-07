/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [isFaceShow, setIsFaceShow] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaceShow = () => {
    setIsFaceShow(!isFaceShow);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      isFaceShow || setIsFaceShow(true);
    } else {
      isFaceShow && setIsFaceShow(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>カウント：{num}</p>
      <br />
      <button onClick={onClickSwitchFaceShow}>on/off</button>
      {isFaceShow && <p>・ω・</p>}
    </>
  );
};

export default App;
