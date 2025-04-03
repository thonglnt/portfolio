import { useState, useEffect, useRef } from "react";
import "./style.css";

const keyboardRows: string[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  ["Space"],
];

const sampleTexts: string[] = [
  "The quick brown fox jumps over the lazy dog",
  "Vue and React are modern JavaScript frameworks",
  "Typing fast is a useful and productive skill",
  "Frontend development involves HTML CSS and JavaScript",
  "Practice every day to improve your coding speed",
];

const TypingSpeedTest = () => {
  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [activeKey, setActiveKey] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [sampleText, setSampleText] = useState(sampleTexts[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTest = (): void => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const newText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setSampleText(newText);
    setTypedText("");
    setStartTime(null);
    setTimeElapsed(0);
    setActiveKey("");
    setIsFinished(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!startTime && !isFinished) setStartTime(Date.now());
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      setActiveKey(key);
    };

    const handleKeyUp = () => setActiveKey("");

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [startTime, isFinished]);

  useEffect(() => {
    if (startTime && !isFinished) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - (startTime as number)) / 1000));
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTime, isFinished]);

  useEffect(() => {
    if (typedText.trim() === sampleText) {
      setIsFinished(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [typedText, sampleText]);

  const wpm: number = (() => {
    const words = typedText.trim().split(/\s+/).length;
    const minutes = timeElapsed / 60;
    return minutes > 0 ? Math.floor(words / minutes) : 0;
  })();

  return (
    <div className="typing-container">
      <div className="sample-text">{sampleText}</div>
      <textarea
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        className="typing-area"
        disabled={isFinished}
      />
      <div className="typing-stats">
        <p>Time: {timeElapsed}s</p>
        <p>WPM: {wpm}</p>
        {isFinished && <p className="completed">✅ Completed!</p>}
        <button onClick={resetTest} className="restart-btn">
          🔄 Restart
        </button>
      </div>
      <div className="keyboard">
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <div
                key={key}
                className={`key ${
                  key.toLowerCase() === activeKey ? "active" : ""
                } ${key}`}
              >
                {key}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypingSpeedTest;
