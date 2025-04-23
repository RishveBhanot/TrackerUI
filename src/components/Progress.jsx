import React from "react";

const Progress = ({ result }) => {
  if (!result) {
    return (
      <div className="text-white text-center">
        <p>Waiting for result...</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 p-4 rounded-md">
      <label className="block text-lg font-bold text-zinc-300">
        Total Packs:
      </label>
      <p className="mb-2">{result.totalPacks} / 500</p>

      <label className="block text-lg font-bold text-zinc-300">
        Packs Remaining:
      </label>
      <p className="mb-4">{result.remaining}</p>

      <p className="text-lg font-bold mb-2 text-zinc-300">Heirloom Progress</p>
      <div className="w-full bg-gray-700 h-4 rounded overflow-hidden mb-2">
        <div
          className="bg-red-500 h-full"
          style={{ width: `${result.progressPercent}%` }}
        ></div>
      </div>
      <p className="italic">You're almost halfway to the Heirloom</p>
    </div>
  );
};

export default Progress;