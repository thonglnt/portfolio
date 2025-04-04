import Divider from "@/components/Divider";
import { useEffect, useState } from "react";
import YoutubeMusicList from "@/components/YoutubeList";
import { VideoItem } from "@/interfaces/videosItem";

const Youtube = () => {
  const API_KEY = import.meta.env.VITE_GOOGLE_CREDENTIAL_KEY;
  const CHANNEL_ID = "UCXQlthOK_g1CUkvqZjAXdGA";
  console.log(API_KEY);
  const [videos, setVideos] = useState<{ items: VideoItem[] }>({ items: [] });

  const fetchPopularVideos = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=viewCount&maxResults=10&type=video`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("❌ Lỗi khi fetch video:", error);
    }
  };

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  return (
    <div className="container" style={{ maxWidth: "720px" }}>
      <h1 className="title">Giải trí</h1>
      <p className="subtitle">
        Thỉnh thoảng tớ cũng hay làm video nhạc, mọi người theo dõi nhé.
      </p>
      <Divider height="1px" width="100%" bgColor="#e2e2e2" />
      <h3 className="search-repo-title">
        Dưới đây là link kênh Youtube của tớ, mọi người yêu thích thì subscriber
        giúp tớ với nhé!!!
      </h3>
      <a
        target="_blank"
        href="https://www.youtube.com/@SunsetVibes_Official"
        style={{ textDecoration: "underline" }}
      >
        https://www.youtube.com/@SunsetVibes_Official
      </a>
      <p className="contact-title" style={{ marginTop: 30 }}>
        Vài video nổi bật mình hay nghe
      </p>
      {videos && <YoutubeMusicList videos={videos.items} />}
    </div>
  );
};

export default Youtube;
