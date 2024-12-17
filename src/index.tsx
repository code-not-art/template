import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@code-not-art/sketch';
import sketch from './sketch';

const root = document.getElementById('root');

ReactDOM.render(
	<React.StrictMode>
		<App sketch={sketch} />
	</React.StrictMode>,
	root,
);
