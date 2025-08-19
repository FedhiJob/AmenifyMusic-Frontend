import React, { useRef } from "react";

function MusicPlayer({ src }) {
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg shadow-md">
      <button
        onClick={togglePlay}
        className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Play / Pause
      </button>
      <audio ref={audioRef} src={src} />
      <span className="text-gray-700 truncate">{src.split("/").pop()}</span>
    </div>
  );
}

export default MusicPlayer;
