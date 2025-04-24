import React, { useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";

const Calculate = ({
  level,
  battlePass,
  purchasedPacks,
  setPurchasedPacks,
  setResult,
}) => {
  const [loading, setLoading] = useState(false); // <-- Spinner state

  const handleCalculate = async () => {
    console.log("clicked");
    setLoading(true); // Start spinner

    try {
      const response = await axios.post(
        "https://apex-heirloom-tracker-backend.onrender.com/api/calculate",
        {
          level: Number(level),
          battlePass,
          purchasedPacks: Number(purchasedPacks),
        }
      );

      console.log("Data sent to server:", response.data);
      setResult(response.data);
    } catch (error) {
      console.error("API request failed:", error);
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-zinc-300 text-lg">Manually Bought Apex Packs</h2>
      <input
        type="number"
        value={purchasedPacks}
        onChange={(e) => setPurchasedPacks(e.target.value)}
        className="bg-black text-white border border-zinc-600 p-[4px] rounded"
      />
      <button
        onClick={handleCalculate}
        // disabled={loading}
        className={`w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-60`}
      >
        {loading ? (
          <Bars
            height="20"
            width="20"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          "Calculate"
        )}
      </button>
    </div>
  );
};

export default Calculate;
