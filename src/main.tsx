import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./sass/main.sass";

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
ReactDOM.render(Example(), document.getElementById("root"));
