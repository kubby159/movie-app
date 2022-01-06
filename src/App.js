import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
