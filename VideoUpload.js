import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import "./VideoUpload.css";

function VideoUpload() {
  const [url, setUrl] = useState("");
  const [channel, setChannel] = useState("");
  const [description, setDescription] = useState("");
  const [song, setSong] = useState("");
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [messages, setMessages] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "videos"), {
        url,
        channel,
        description,
        song,
        likes: Number(likes),
        shares: Number(shares),
        messages: Number(messages),
      });
      alert("Video uploaded successfully!");
      // Clear the form
      setUrl("");
      setChannel("");
      setDescription("");
      setSong("");
      setLikes(0);
      setShares(0);
      setMessages(0);
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Failed to upload the video. Please try again.");
    }
  };

  return (
    <div className="videoUpload">
      <h2>Upload a Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Channel Name"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Song Name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Likes"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />
        <input
          type="number"
          placeholder="Shares"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
        />
        <input
          type="number"
          placeholder="Messages"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
        />
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
}

export default VideoUpload;
