import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomerTable from "./pages/CustomerTable";
import CustomerPage from "./pages/CustomerPage";
import CustomerBidPage from "./pages/CustomerBidPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/bidInfo">
            <CustomerBidPage />
          </Route>
          <Route path="/">
            <CustomerPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
