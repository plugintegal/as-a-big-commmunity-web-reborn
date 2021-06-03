import { BrowserRouter as Router, Route } from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/event" exact component={Event} />
    </Router>
  );
}

export default App;
