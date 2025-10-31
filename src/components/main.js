import React, { useState, useEffect } from "react";

const Main = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👇 Manually specify the video IDs you want to display
  const manualVideoIds = [
    "UTJr9d84i1c", // your provided video
    // "dQw4w9WgXcQ", // example video
    // "LXb3EKWsInQ", // another example
  ];

  useEffect(() => {
    // Simulate fetching manually added videos
    const fetchManualVideos = () => {
      try {
        // Create mock video data using YouTube embed URLs
        const manualVideos = manualVideoIds.map((id) => ({
          id: { videoId: id },
          snippet: {
            title: `YouTube Video (${id})`,
            thumbnails: {
              medium: {
                url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
              },
            },
          },
        }));

        setVideos(manualVideos);
      } catch (error) {
        console.error("Error loading manual videos:", error);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchManualVideos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!videos || videos.length === 0) return <p>No videos found.</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "360px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <iframe
              width="320"
              height="180"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
