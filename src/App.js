import React from 'react';
import Router from './Router';
import './assets/style/style.css';

import { BrowserRouter } from 'react-router-dom';
import { LayoutProvider } from 'react-page-layout';
import PublicDefaultLayout from './components/Default/PublicDefaultLayOut';
import DefaultLayout from '../src/components/Default/DefaultLayOut';
const layouts = {
	'public': PublicDefaultLayout,
	'default': DefaultLayout
}; 

function App() {
	return (
		<LayoutProvider layouts={layouts}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</LayoutProvider>
	);
}

export default App;
