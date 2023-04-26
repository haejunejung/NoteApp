import NoteMain from "./screens/NoteMain/NoteMain";
import { useRecoilValue } from "recoil";

import "./App.css";
import { screenState } from "./recoil/state";
import CreateNote from "./screens/CreateNote/CreateNote";
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
