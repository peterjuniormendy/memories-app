import React from "react";
import memories from "/memories.png";

const Navbar = () => {
  return (
    <div className="w-full p-4 flex gap-3 items-center justify-center static bg-inherit">
      <h1 className="text-black text-5xl">Memories</h1>
      <img
        className="image"
        src={memories}
        alt="memories"
        height="60"
        width="60"
      />
    </div>
  );
};

export default Navbar;
