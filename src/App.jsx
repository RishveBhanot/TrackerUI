import React, { useState } from "react";
import AccountLevel from "./components/AccountLevel";
import BattlePassTracker from "./components/BattlePassTracker";
import Calculate from "./components/Calculate";
import Progress from "./components/Progress";

function App() {
  const [level, setLevel] = useState("");
  const [battlePass, setBattlePass] = useState([]);
  const [purchasedPacks, setPurchasedPacks] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-2xl bg-zinc-900 text-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
        <AccountLevel level={level} setLevel={setLevel} />
        <BattlePassTracker
          battlePass={battlePass}
          setBattlePass={setBattlePass}
        />
        <Calculate
          level={level}
          battlePass={battlePass}
          purchasedPacks={purchasedPacks}
          setPurchasedPacks={setPurchasedPacks}
          setResult={setResult}
        />
        <Progress result={result}/>
      </div>
    </div>
  );
}

export default App;
