import Count from "./components/Count";
import Countbuttons from "./components/Countbuttons";
import Reset from "./components/Reset";
import Title from "./components/Title";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main>
        <div className="card">
          <Title />
          <Count count={count} />
          <Reset setCount={setCount} />
          <Countbuttons setCount={setCount} />
        </div>
      </main>
    </>
  );
}
