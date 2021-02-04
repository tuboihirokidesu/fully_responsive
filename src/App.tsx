import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
