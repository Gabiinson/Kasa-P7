import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import '../src/index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
		<Navbar />
			<Routes>
					<Route exact path = '/' element= {<Home />} />
					<Route path = "/apropos" element ={<Apropos />} />
					<Route path = "logement/:id" element ={<Logement />} />
					<Route path = '*' element = {<Error /> } />
						
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals();