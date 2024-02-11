import logo from './logo.svg';
import sass from './App.sass';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CO2Emissions from "./components/maps/CO2Emissions";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/co2-emissions" element={<CO2Emissions/>} />
					<Route path="/path2" element={<>path 2</>} />
					<Route path="/path3" element={<>path 3</>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
