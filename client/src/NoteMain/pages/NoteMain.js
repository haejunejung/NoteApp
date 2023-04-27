import Lists from "../components/NoteList/Lists/Lists";
import CreateButton from "../components/CreateButton/CreateButton";

import Title from "../../shared/components/Title/Title";

import "./NoteMain.css";

const NoteMain = () => {
  return (
    <div>
      <div className="Note">
        <Title />
        <Lists />
        <CreateButton />
      </div>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
      </div>
    </div>
  );
};

export default NoteMain;
