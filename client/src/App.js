import { BrowserRouter as Router, Route } from "react-router-dom";

import NoteMain from "./NoteMain/pages/NoteMain";
import CreateNote from "./CreateNote/pages/CreateNote";
import Non404 from "./NonePage/None404";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Route path="/NoteMain">
            <NoteMain />
          </Route>
          <Route path="/CreateNote">
            <CreateNote />
          </Route>
          <Route path="*">
            <Non404 />
          </Route>
        </Router>
      </div>
    </div>
  );
};

export default App;
