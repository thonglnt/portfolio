import { useEffect, useState } from "react";
import { VideoItem } from "@/interfaces/videosItem";
import Divider from "@/components/Divider";
import YoutubeMusicList from "@/components/YoutubeList";
// import { fetcher } from "@/utils/fetcher";

const Youtube = () => {
  const API_KEY = import.meta.env.VITE_GOOGLE_CREDENTIAL_KEY;
  const CHANNEL_ID = "UCXQlthOK_g1CUkvqZjAXdGA";
  const [videos, setVideos] = useState<{ items: VideoItem[] }>({ items: [] });

  const fetchPopularVideos = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=viewCount&maxResults=10&type=video`;

    // const data = await fetcher<VideoItem>(url);
    // setVideos(data);
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
