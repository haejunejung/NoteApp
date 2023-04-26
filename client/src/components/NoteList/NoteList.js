import Content from "../Content/Content";
import "./NoteList.css";

const NoteList = () => {
  return (
    <div className="NoteList">
      <div className="Contents-container">
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default NoteList;
