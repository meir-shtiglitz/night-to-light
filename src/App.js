import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/nav';
import Magic from './components/magic.js';
import Seven from './components/targil.js';
import Game from './components/game.js';
import AdToObj from './components/adToObj';
import Upload from './components/upload';
import Riddle from './components/riddle';
import Lights from './components/lights';
import Backgroundcards from './components/backgroundcards';
import { Switch, Route } from "react-router-dom";
import Tasks from "./components/tasks.js";
import MovieApi from "./components/movieApi";
import Counter from "./components/Counter";
import S_Home from "./components/store/Home";
import Animal from './components/store/Animal';
import AndOne from './components/store/andOne';
import Location from './components/store/location';

function App() {
 
  return (
    <>
      {/* <Nav /> */}
      <Switch>

        <Route exact path="/location" component={Location} />
        <Route exact path="/andone" component={AndOne} />
        <Route exact path="/store/" component={S_Home} />
        <Route exact path="/store/animal/:name" component={Animal} />
        <Route path="/magic" component={Magic} />
        <Route path="/seven" component={Seven} />
        <Route path="/game" component={Game} />
        <Route path="/adtoobj" component={AdToObj} />
        <Route path="/upload" component={Upload} />
        <Route path="/riddle" component={Riddle} />
        <Route path="/lights" component={Lights} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/movieApi" component={MovieApi} />
        <Route path="/Counter" component={Counter} />
        <Route path="/backgroundcards" component={Backgroundcards} />
      </Switch>
    </>
  );
}

export default App;
