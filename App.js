import "./App.css";
import React, { useState, useEffect } from "react";
import Video from "./Video";
import VideoUpload from "./VideoUpload";
import db from "./firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "videos"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const videoData = snapshot.docs.map((doc) => doc.data());
        setVideos(videoData);
      },
      (error) => {
        console.error("Firestore error:", error);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <h1>PopReel</h1>
      <h2>Scroll to Watch Short Videos!</h2>
      <VideoUpload />
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
