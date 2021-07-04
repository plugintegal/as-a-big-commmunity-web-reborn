import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Event from "./pages/Event";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/event" exact component={Event} />
      <Route path="/blog" exact component={Blog} />
    </Router>
  );
}

export default App;
