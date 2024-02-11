import logo from './logo.svg';
import sass from './styles/App.sass';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import LandingSite from './components/LandingSite.jsx';
import CO2Emissions from './components/maps/CO2Emissions';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LandingSite />} />
					<Route path="app" element={<Navbar/>} />
					<Route path="app/co2-emissions" element={<><Navbar/><CO2Emissions/></>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
