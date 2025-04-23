import React from "react";

const Progress = ({ result }) => {
  // if (!result) return null;
  return (
    <div className="bg-zinc-800 p-4 rounded-md">
      <label className="block text-lg font-bold text-zinc-300">
        Total Packs:
      </label>
      <p className="mb-2"> 300/ 500</p>

      <label className="block text-lg font-bold text-zinc-300">
        Packs Remaining:
      </label>
      <p className="mb-4">200</p>

      <p className="text-lg font-bold mb-2 text-zinc-300">Heirloom Progress</p>
      <div className="w-full bg-gray-700 h-4 rounded overflow-hidden mb-2">
        <div
          className="bg-red-500 h-full w-85"
          
        ></div>
      </div>
      <p className="italic">You're almost halfway to the Heirloom</p>
    </div>
  );
};

export default Progress;
