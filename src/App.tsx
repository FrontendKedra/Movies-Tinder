import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Recommendations } from "./pages/Recommendations";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/">
          <Redirect to="/recommendations" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
