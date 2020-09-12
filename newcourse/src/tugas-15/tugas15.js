import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './tugas15.css'
import Tugas9 from "../Tugas-9/tugas9Fix"
import Tugas10 from '../Tugas-10/tugas10Fix'
import Tugas11 from '../Tugas-11/tugas11Fix';
import Tugas12 from '../Tugas-12/tugas12fix';
import Tugas13 from '../Tugas-13/tugas13Fix';
import Tugas14 from '../Tugas-14/Main';
import Theme from './theme'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Tugas 9</Link>
            </li>
            <li>
              <Link to="/Tugas-10">Tugas 10</Link>
            </li>
            <li>
              <Link to="/Tugas-11">Tugas 11</Link>
            </li>
            <li>
              <Link to="/Tugas-12">Tugas 12</Link>
            </li>
            <li>
              <Link to="/Tugas-13">Tugas 13</Link>
            </li>
            <li>
              <Link to="/Tugas-14">Tugas 14</Link>
            </li>
            <li>
              <Link to="/Tugas-15">Tugas 15</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Tugas9} />
          <Route exact path="/tugas-10" component={tugas10} />
          <Route exact path="/tugas-11" component={tugas11} />
          <Route exact path="/tugas-12" component={tugas12} />
          <Route exact path="/tugas-13" component={tugas13} />
          <Route exact path="/tugas-14" component={tugas14} />
          <Route exact path="/tugas-15" component={Theme} />
        </Switch>
      </div>
    </Router>
  );
}
