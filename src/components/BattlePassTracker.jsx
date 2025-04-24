import React, { useState } from "react";

const BattlePassTracker = ({battlePass, setBattlePass}) => {

    const [season, setSeason] = useState("S1");
    const [levelReached, setLevelReached] = useState("");
    const [bought, setBought] = useState(false);

  return (
    <div className="bg-zinc-800 p-4 rounded-md">
      <h2 className="text-2xl text-red-500 font-bold mb-4">
        Battle Pass Tracker
      </h2>
      <div className="flex gap-6 items-end">
        {/* Season Select */}
        <div className="flex flex-col">
          <h3 className="text-lg mb-1 text-zinc-300">Season</h3>
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            name="season"
            className="bg-black text-white border border-zinc-600 p-2 rounded w-50 h-10"
          >
            <option value="s1">S1</option>
            <option value="s2">S2</option> 
            <option value="s3">S3</option>
            <option value="s4">S4</option>
            <option value="s5">S5</option>
            <option value="s6">S6</option>
            <option value="s7">S7</option>
            <option value="s8">S8</option>
            <option value="s9">S9</option>
            <option value="s10">S10</option>
            <option value="s11">S11</option>
            <option value="s12">S12</option> 
            <option value="s13">S13</option>
            <option value="s14">S14</option>
            <option value="s15">S15</option>
            <option value="s16">S16</option>
            <option value="s17">S17</option>
            <option value="s18">S18</option>
            <option value="s19">S19</option>
            <option value="s20">S20</option>
            <option value="s21">S21</option>
            <option value="s22">S22</option> 
            <option value="s23">S23</option>
            <option value="s24">S24</option>
          </select>
        </div>

        {/* Level Input */}
        <div className="flex flex-col">
          <h3 className="text-lg mb-1 text-zinc-300">Level</h3>
          <input
            type="text"
            value={levelReached}
            onChange={(e) => setLevelReached(e.target.value)}
            className="bg-black text-white border border-zinc-600 p-2 rounded w-30 h-10"
          />
        </div>

        {/* Checkbox */}
        <div className="flex flex-col">
          <h3 className="text-lg mb-1 text-zinc-300">Bought BP?</h3>
          <div className="flex items-center gap-2 bg-black border border-zinc-600 rounded p-2 w-30 h-10">
            <input
              type="checkbox"
              checked={bought}
              onChange={(e) => setBought(e.target.checked)}
              className="w-5 h-5 bg-black accent-white border border-zinc-600"
            />
            <p className="text-white">Yes</p>
          </div>
        </div>
      </div>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        + Add Season
      </button>
    </div>
  );
};

export default BattlePassTracker;
