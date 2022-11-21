import { NextPage } from "next";
import dynamic from "next/dynamic";
import { ChangeEvent, useState } from "react";
const DynamicComponent = dynamic(
  () => import("react-media-recorder").then((mod) => mod.ReactMediaRecorder),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const [selectedMedia, setSelectedMedia] = useState("audio");

  const [mediaBlob, setMediaBlob] = useState(undefined);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (mediaBlob) setMediaBlob(undefined);
    if (selectedMedia != e.target.value) setSelectedMedia(e.target.value);
  };

  return (
    <div className="container">
      <main className="container">
        <select value={selectedMedia} onChange={(value) => handleChange(value)}>
          <option value="audio">Audio</option>
          <option value="video">Video</option>
          <option value="screen">Screen</option>
        </select>
        <div>
          <DynamicComponent
            audio={selectedMedia === "audio" ? true : false}
            video={selectedMedia === "video" ? true : false}
            screen={selectedMedia === "screen" ? true : false}
            render={({
              status,
              startRecording,
              stopRecording,
              mediaBlobUrl,
            }) => {
              setMediaBlob(mediaBlobUrl);
              console.log(String(mediaBlobUrl));
              return (
                <div>
                  <p>Recording Status:- {status}</p>
                  <button onClick={startRecording}>Start Recording</button>
                  <button onClick={stopRecording}>Stop Recording</button>
                  <video src={mediaBlob} controls autoPlay />
                </div>
              );
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
