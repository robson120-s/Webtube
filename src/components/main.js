import React, { useState, useEffect } from "react";

const Main = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const channelId = "UC1rufUI1qdnHq6B8OAXSdwA";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UC1rufUI1qdnHq6B8OAXSdwA&part=snippet,id&order=date&maxResults=10`
);

        const data = await response.json();
        console.log(data); // 👈 check what comes back

        if (data.items) {
          setVideos(data.items);
        } else {
          setVideos([]);
          console.error("No items found in API response");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [API_KEY, channelId]);

  if (loading) return <p>Loading...</p>;

  if (!videos || videos.length === 0) return <p>No videos found.</p>;

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId || video.id.channelId}>
          <h3>{video.snippet.title}</h3>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Main;
