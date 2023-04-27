import { useRecoilValue } from "recoil";

import NoteMain from "./NoteMain/pages/NoteMain";
import CreateNote from "./CreateNote/pages/CreateNote";

import { screenState } from "./recoil/state";

import "./App.css";

const App = () => {
  const screen = useRecoilValue(screenState);

  return (
    <div className="App">
      <div className="container">
        {screen === "NoteMain" ? <NoteMain /> : <CreateNote />}
      </div>
    </div>
  );
};

export default App;
