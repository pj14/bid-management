import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomerTable from "./pages/CustomerTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/bidInfo">
            <CustomerTable />
          </Route>
          <Route path="/">
            <CustomerTable />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
