import "./NoteMain.css";
import Title from "../../components/Title/Title";
import Lists from "../../components/Lists/Lists";
import CreateButton from "../../components/Bottons/CreateButton/CreateButton";

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
