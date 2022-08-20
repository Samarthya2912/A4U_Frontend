import './App.css';
import HomePage from "./pages/HomePage";
import QuestionsPage from './pages/QuestionsPage';
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/:sub/problems">
            <QuestionsPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
