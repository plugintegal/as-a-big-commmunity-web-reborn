import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutSquad from "./pages/AboutSquad";
import Blog from "./pages/Blog";
import DetailEvents from "./pages/DetailEvents";

import Event from "./pages/Event";
import Home from "./pages/Home";
import Login from "./pages/Login";

import PaymentEvent from "./pages/PaymentEvent";
import RegistrationEvent from "./pages/RegistrationEvent";
import HandleRegister from "./components/registrationMember/HandleRegister";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/detail-event" exact component={DetailEvents} />
      <Route path="/about-squad" exact component={AboutSquad} />
      {/* <Route path="/registration-member" exact component={RegistrationMember} /> */}
      <Route path="/registration-event" exact component={RegistrationEvent} />
      <Route path="/payment-event" exact component={PaymentEvent} />

      <Route path="/event" exact component={Event} />
      <Route path="/login" exact component={Login} />
      {/* <Route path="/register" exact component={Register} /> */}
      <Route path="/oprec" exact component={HandleRegister} />
    </Router>
  );
}

export default App;
