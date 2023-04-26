import "./NoteMain.css";
import Title from "../../components/Title/Title";
import NoteList from "../../components/NoteList/NoteList";
import CreateButton from "../../components/CreateButton/CreateButton";

const NoteMain = () => {
  return (
    <div>
      <div className="Note" gap={3}>
        <Title />
        <NoteList />
        <CreateButton />
      </div>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default NoteMain;
