import {NextPage} from 'next';
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(
	() => import('react-media-recorder').then(mod => mod.ReactMediaRecorder),
	{
		ssr: false,
	},
);

const Home: NextPage = () => {
	return (
		<div className="container">
			<main className="container">
				<div>
					<DynamicComponent
						audio
						render={({status, startRecording, stopRecording, mediaBlobUrl}) => (
							<div>
								<p>Audio Recording Status:- {status}</p>
								<button onClick={startRecording}>Start Audio Recording</button>
								<button onClick={stopRecording}>Stop Audio Recording</button>
								<video src={mediaBlobUrl} controls autoPlay />
							</div>
						)}
					/>
					<DynamicComponent
						video
						render={({status, startRecording, stopRecording, mediaBlobUrl}) => (
							<div>
								<p>Video Recording Status:- {status}</p>
								<button onClick={startRecording}>Start Video Recording</button>
								<button onClick={stopRecording}>Stop Video Recording</button>
								<video src={mediaBlobUrl} controls autoPlay />
							</div>
						)}
					/>
					<DynamicComponent
						screen
						render={({status, startRecording, stopRecording, mediaBlobUrl}) => (
							<div>
								<p>Screen Recording Status:- {status}</p>
								<button onClick={startRecording}>Start Screen Recording</button>
								<button onClick={stopRecording}>Stop Screen Recording</button>
								<video src={mediaBlobUrl} controls autoPlay />
							</div>
						)}
					/>
				</div>
			</main>
		</div>
	);
};

export default Home;
