import "./App.css";
import Layout from "./layouts/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { createTheme, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/NewChart">
            <Homepage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
