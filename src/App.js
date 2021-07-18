import { BrowserRouter as Router, Route } from "react-router-dom";

import Event from "./pages/EventGrid";
import EventList from "./pages/EventList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />

      <Route path="/eventgrid" exact component={Event} />
      <Route path="/eventlist" exact component={EventList} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
}

export default App;
