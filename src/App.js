import "./App.css";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Resume from "./resume/Resume";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  let theme = createTheme({
    components: {
      MuiCardHeader: {
        styleOverrides: {
          root: {
            padding: "16px 16px 0px",
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            "&:last-child": {
              paddingBottom: "16px",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
