import { FullPageSketchCanvas } from '@code-not-art/sketch';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import sketch from './sketch';

const root = document.getElementById('root');

const App = () => (
	<>
		<Helmet>
			<title>Code Sketch</title>
			<meta name="description" content="HTML Canvas sketch made by code" />
		</Helmet>
		<FullPageSketchCanvas sketch={sketch}></FullPageSketchCanvas>
	</>
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
