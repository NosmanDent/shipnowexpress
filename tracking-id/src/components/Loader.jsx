import React from "react";

function Loader() {
  return (
    <div className="grid place-content-center">
      <div className="p-4 md:p-4 rounded-full border-4 border-l-stone-400 border-black animate-spin text-white text-center"></div>
    </div>
  );
}

export default Loader;
