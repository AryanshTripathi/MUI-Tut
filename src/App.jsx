import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import "./App.css";
import Layout from "./Components/Layout";

const theme = createTheme({
	palette: {
		secondary: purple,
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Notes />} />
						<Route path="/create" element={<Create />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
