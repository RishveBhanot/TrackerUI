import React from 'react';
import axios from 'axios';

const Calculate = ({ level, battlePass, purchasedPacks, setPurchasedPacks, setResult }) => {

  const handleCalculate = async () => {
    try {
      // We send a POST request using axios with the required body
      const response = await axios.post('https://apex-heirloom-tracker-backend.onrender.com/api/calculate', {
        level: Number(level),               // Ensure it's a number
        battlePass: battlePass,             // Already an array of objects
        purchasedPacks: Number(purchasedPacks)
      });

      // Save the response in result state to pass to <Progress />
      setResult(response.data);

    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-zinc-300 text-lg'>Manually Bought Apex Packs</h2>
      <input
        type="number"
        value={purchasedPacks}
        onChange={(e) => setPurchasedPacks(e.target.value)}
        className="bg-black  text-white border border-zinc-600 p-[4px] rounded"
      />
      <button
        onClick={handleCalculate}
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Calculate
      </button>
    </div>
  );
};

export default Calculate;
