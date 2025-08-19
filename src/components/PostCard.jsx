import React from "react";
import MusicPlayer from "./MusicPlayer";

function PostCard({ title, description, mediaType, mediaSrc }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-3">
      <h2 className="text-xl font-bold text-indigo-600">{title}</h2>
      <p className="text-gray-700">{description}</p>

      {mediaType === "audio" && <MusicPlayer src={mediaSrc} />}
      {mediaType === "image" && (
        <img src={mediaSrc} alt={title} className="rounded w-full" />
      )}
      {mediaType === "video" && (
        <video src={mediaSrc} controls className="rounded w-full" />
      )}
    </div>
  );
}

export default PostCard;
