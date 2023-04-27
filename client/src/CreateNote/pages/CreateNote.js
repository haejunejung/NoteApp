import BackButton from "../components/BackButton/BackButton";
import DoneButton from "../components/DoneButton/DoneButton";

import Title from "../../shared/components/Title/Title";

import "./CreateNote.css";

const CreateNote = () => {
  return (
    <div className="Note">
      <Title />
      <BackButton />
      <div className="notes-container">
        <div className="create-title">Title</div>
        <div className="create-contents">Contents</div>
      </div>
      <DoneButton />
    </div>
  );
};

export default CreateNote;
