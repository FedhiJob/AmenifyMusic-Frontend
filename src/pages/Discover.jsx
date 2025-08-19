import React from "react";
import PostCard from "../components/PostCard";

function Discover() {
  const posts = [
    {
      title: "Amazing Gospel Song",
      description: "Listen to this beautiful worship track!",
      mediaType: "audio",
      mediaSrc: "/assets/audio/song1.mp3",
    },
    {
      title: "Praise Image",
      description: "Beautiful worship moment captured.",
      mediaType: "image",
      mediaSrc: "/assets/images/worship1.jpg",
    },
    {
      title: "Live Worship Video",
      description: "Experience the live performance.",
      mediaType: "video",
      mediaSrc: "/assets/videos/live1.mp4",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}

export default Discover;
