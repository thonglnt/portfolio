import Divider from "@/components/Divider";
import { useTheme } from "@/App";
import "./style.css";
import { useEffect, useState } from "react";

const Projects = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [allRepos, setAllRepos] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);

  // Fetch all repos once on mount
  useEffect(() => {
    const fetchAllRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/thonglnt/repos?per_page=100"
        );
        const data = await res.json();
        setAllRepos(data);
        setResults(data); // display all by default
      } catch (err) {
        console.error("Lỗi fetch tất cả repo:", err);
      }
    };
    fetchAllRepos();
  }, []);

  // Debounce searchTerm input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Local filtering based on debounced term
  useEffect(() => {
    if (debouncedTerm.trim() === "") {
      setResults(allRepos);
    } else {
      const filtered = allRepos.filter((repo) =>
        repo.name.toLowerCase().includes(debouncedTerm.toLowerCase())
      );
      setResults(filtered);
    }
  }, [debouncedTerm, allRepos]);

  return (
    <div className="container" style={{ maxWidth: "720px" }}>
      <h1 className="title">Dự án</h1>
      <p className="subtitle">
        Những dự án lập trình cá nhân publish của tớ từ Github.
      </p>
      <Divider
        height="1px"
        width="100%"
        borderTop={
          theme === "dark" ? "2px dotted #343434" : "2px dotted #e2e2e2"
        }
      />
      <h3 className="search-repo-title">Tìm kiếm repository từ Github</h3>
      <p className="subtitle">
        Các pet project/public repository sử dụng Node.js, React...
      </p>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-repo-input"
        type="text"
        placeholder="Tìm kiếm repository"
      />
      <Divider
        height="1px"
        width="100%"
        borderTop={
          theme === "dark" ? "2px dotted #343434" : "1px dotted #e2e2e2"
        }
        margin="20px 0 0"
      />
      <ul className="repo-list">
        {results.map((repo) => (
          <li key={repo.id} className="repo-item">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-box"
            >
              <div className="repo-left">
                <h3 className="repo-name">{repo.name}</h3>
                <p className="subtitle">{repo.description}</p>
                <div className="repo-tags">
                  {repo.language && (
                    <span className="tag language">{repo.language}</span>
                  )}
                  {repo.license && (
                    <span className="tag license">{repo.license.name}</span>
                  )}
                  <span className="tag updated">
                    Cập nhật lúc{" "}
                    {new Date(repo.updated_at).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>
              <div className="repo-stars">⭐ Star: {repo.stargazers_count}</div>
            </a>
          </li>
        ))}
      </ul>
      <Divider
        height="1px"
        width="100%"
        bgColor="#e2e2e2"
        margin="40px 0 20px"
      />
      <a
        href="https://github.com/thonglnt"
        target="_blank"
        className="redirect-repo"
      >
        Xem Github của tớ...
      </a>
    </div>
  );
};

export default Projects;
