import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'
// import Nav from './components/nav';
import Lights from './components/lights';
import { Switch, Route } from "react-router-dom";

function App() {
 
  return (
    <>
      <Switch>
        <Route path="/" component={Lights} />
      </Switch>
    </>
  );
}

export default App;
