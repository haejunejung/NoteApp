import Stack from "react-bootstrap/Stack";
import "./NoteMain.css";
import Title from "../../components/Title/Title";
import NoteList from "../../components/NoteList/NoteList";
import CreateButton from "../../components/CreateButton/CreateButton";

const NoteMain = () => {
  return (
    <Stack className="Note" gap={3}>
      <div className="Title">
        <Title />
      </div>
      <div className="NoteList">
        <NoteList />
      </div>
      <div className="CreateButton">
        <CreateButton />
      </div>
    </Stack>
  );
};

export default NoteMain;
