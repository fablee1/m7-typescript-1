import "./App.css"
import Search from "./components/Search"
import Results from "./components/Results"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/search">
          <Results />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
