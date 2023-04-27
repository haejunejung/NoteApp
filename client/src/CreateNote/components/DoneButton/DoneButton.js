import { useSetRecoilState } from "recoil";

import Button from "../../../shared/components/Button/Button";

import { screenState } from "../../../recoil/state";

import "./DoneButton.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DoneButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("NoteMain");
  };

  return (
    <div className="DoneButton-container">
      <Link to="/NoteMain">
        <Button content="Done" handler={handleChangeScreen} />
      </Link>
    </div>
  );
};

export default DoneButton;
