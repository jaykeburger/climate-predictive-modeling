import logo from './logo.svg';
import sass from './App.sass';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSite from './components/LandingSite/LandingSite.jsx';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={
						<LandingSite />
					} />
					<Route path="/app" element={
						<Navbar />
					} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
