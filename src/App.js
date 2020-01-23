import React from 'react';
import './App.css';
import { Document } from 'react-pdf'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				Hello World!
				<Document />
			</header>
		</div>
	);
}

export default App;
