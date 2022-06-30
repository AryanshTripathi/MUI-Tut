import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Notes />} />
				<Route path="/create" element={<Create />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
