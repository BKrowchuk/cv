import "./App.css";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Resume from "./resume/Resume";
// import { createTheme, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/cv/">
            <Homepage />
          </Route>
          <Route exact path="/cv/Resume">
            <Resume />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
