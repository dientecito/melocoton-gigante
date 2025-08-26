import { useState } from "react";
import "./VideoGallery.css";

const videos = [
  {
    title: "Los Ratones - Evelyn Cornejo (Live en la Xana del Torio)",
    thumbnail: "images/img_miniaturas_videos/video1_thumb.jpg",
    embedUrl: "https://www.youtube.com/embed/AlLM8XZwbqE",
  },
  {
    title: "Restaurante Chino - Melocotón Gigante (Live en Dicastillo)",
    thumbnail: "images/img_miniaturas_videos/video2_thumb.jpg",
    embedUrl: "https://www.youtube.com/embed/id8DRbGwBJ0",
  },
  {
    title: "Ronda de Robledo de Sanabria - Rodrigo Cuevas (Live en La Bota)",
    thumbnail: "images/img_miniaturas_videos/video3_thumb.jpg",
    embedUrl: "https://www.youtube.com/embed/aBXM5dfEK-s",
  },
];

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="video-gallery-container">
      {!selectedVideo ? (
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-item" onClick={() => setSelectedVideo(video)}>
              <h4 className="video-title">{video.title}</h4>
              <img src={video.thumbnail} alt={video.title} className="video-thumb" />
            </div>
          ))}
        </div>
      ) : (
        <div className="video-player-container">
          <h3 className="selected-video-title">{selectedVideo.title}</h3>
          <div className="video-player-wrapper">
            <iframe
              src={selectedVideo.embedUrl}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="back-button" onClick={() => setSelectedVideo(null)}>
            Volver a la galería
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoGallery;
