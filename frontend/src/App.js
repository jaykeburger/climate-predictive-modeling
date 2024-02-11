import logo from './logo.svg';
import sass from './styles/App.sass';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingSite from './components/LandingSite.jsx';
import CO2Emissions from './components/maps/CO2Emissions.js';
import Chat from './components/Chat.jsx';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LandingSite />} />
					<Route
						path="app"
						element={
							<>
								<CO2Emissions />
								<Chat />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
