import { VideoItem } from "@/interfaces/videosItem";
import "./style.css";

interface YoutubeMusicListProps {
  videos: VideoItem[];
}

const YoutubeMusicList = ({ videos }: YoutubeMusicListProps) => {
  return (
    <div className="youtube-list">
      {videos.map((video) => (
        <a
          key={video.id.videoId}
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          className="youtube-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="youtube-thumbnail"
          />
          <div className="youtube-info">
            <h4 className="youtube-title">{video.snippet.title}</h4>
            <p className="youtube-channel">{video.snippet.channelTitle}</p>
            <p className="youtube-date">
              {new Date(video.snippet.publishedAt).toLocaleDateString("vi-VN")}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default YoutubeMusicList;
