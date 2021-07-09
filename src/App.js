import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutSquad from "./pages/AboutSquad";
import Blog from "./pages/Blog";
import DetailEvents from "./pages/DetailEvents";

import Event from "./pages/EventGrid";
import EventList from "./pages/EventList";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RegistrationEvent from "./pages/RegistrationEvent";
import RegistrationMember from "./pages/RegistrationMember";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/detail-event" exact component={DetailEvents} />
      <Route path="/about-squad" exact component={AboutSquad} />
      <Route path="/registration-member" exact component={RegistrationMember} />
      <Route path="/registration-event" exact component={RegistrationEvent} />

      <Route path="/eventgrid" exact component={Event} />
      <Route path="/eventlist" exact component={EventList} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}

export default App;
