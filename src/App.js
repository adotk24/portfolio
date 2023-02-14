import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour"
import Navigation from "./Navigation";



function App() {
	return (
		<div className="app">
			<PageOne />
			<PageThree />
			<PageFour />
			<PageTwo />
			<Navigation />
		</div>
	);
}

export default App;
