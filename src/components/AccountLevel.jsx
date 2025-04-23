import React from "react";

const AccountLevel = ({ level, setLevel }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-md">
      <h2 className="text-xl text-zinc-300 font-bold mb-2">Account Level</h2>
      <input
        type="text"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="w-full bg-black text-white border border-zinc-600 rounded p-2"
      />
    </div>
  );
};

export default AccountLevel;
