import "./App.css";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import { createTheme, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route exact path="/Resume">
            <Homepage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;