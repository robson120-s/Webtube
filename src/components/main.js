import React,{useState, useEffect} from 'react'


const Main = () => {
  const [videos, setVideos] = useState([null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = ""
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw new Error("Failed To Fetch Data")
        }
        return res.json();

    })
    .then(data=>{
        setVideos(data);
        setLoading(false);

    })
    .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);

    })

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!videos || videos.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <div>

    </div>
  )
}

export default Main