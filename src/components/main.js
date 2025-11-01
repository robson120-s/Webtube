import React, { useState, useEffect } from "react";
import "./styles/header.css";
import logo2 from "../images/logo.png";

const Main = () => {
  const [videosPart1, setVideosPart1] = useState([]);
  const [videosPart2, setVideosPart2] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Manual video IDs for each section
  const manualVideoIdsPart1 = ["vzkbrld4euc", "UTJr9d84i1c", "TkTjvutr8oM"]; // St. John Chrysostom Education Program
  const manualVideoIdsPart2 = ["Pp54hFv-rvk", "zEkl28HfNsI", "1WWsSV6PGl4"]; // Hamere Berhan videos

  useEffect(() => {
    const fetchManualVideos = () => {
      try {
        const part1 = manualVideoIdsPart1.map((id) => ({
          id,
          snippet: {
            title: `Part 1 Video (${id})`,
            thumbnails: {
              medium: {
                url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
              },
            },
          },
        }));

        const part2 = manualVideoIdsPart2.map((id) => ({
          id,
          snippet: {
            title: `Part 2 Video (${id})`,
            thumbnails: {
              medium: {
                url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
              },
            },
          },
        }));

        setVideosPart1(part1);
        setVideosPart2(part2);
      } catch (error) {
        console.error("Error loading manual videos:", error);
        setVideosPart1([]);
        setVideosPart2([]);
      } finally {
        setLoading(false);
      }
    };

    fetchManualVideos();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* --------------------- Section 1 --------------------- */}
      <div className="sec_one">
        <h3 className="display-4 text">Welcome to Hamere Berhan.</h3>
        <h5 className="display-5 text">
          (ሐመረ ብርሃን የብራና መጻሕፍት ሥራ ድርጅት።)
        </h5>

        <p className="moto px-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <q>
            <u>Let's return to the past! || "ወደ ቀድሞ ነገር እንመለስ"</u>
          </q>{" "}
          This work began in 2010 when a few brothers had some ideas.
          Originally, the goal was to prepare and provide free parchment
          scriptures to the monastery's fathers.
        </p>

        <div
          className="video-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {videosPart2.map((video) => (
            <div
              key={video.id}
              className="video-card"
              style={{
                border: "3px solid #c12525ff",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------- Section 2 --------------------- */}
      <div className="sec_two" style={{ marginTop: "70px" }}>
        <img
          src={logo2}
          alt="Logo"
          className="logo2 rounded-circle"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />

        <b style={{ display: "block", marginTop: "20px" }} className="display-6">
          ቅዱስ ዮሐንስ አፈወርቅ የትምህርት ፕሮግራም | የክረምት ትምህርት መርሐግብር | St. John Chrysostom
          Education Program | Summer Camp 2025
        </b>

        <p className="pt-3 fs-5" style={{ maxWidth: "850px", margin: "0 auto" }}>
          ከሐመረ ብርሃን አበይት የአገልግሎት መስኮች አንዱ የሆነው የቅዱስ ዮሐንስ አፈወርቅ የዘመነ ክረምት
          አዳር የህጻናት ትምህርት መርሐ ግብር::
        </p>

        <div
          className="video-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {videosPart1.map((video) => (
            <div
              key={video.id}
              className="video-card"
              style={{
                border: "3px solid #c12525ff",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
