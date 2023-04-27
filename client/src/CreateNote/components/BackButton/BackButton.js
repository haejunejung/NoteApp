import { useSetRecoilState } from "recoil";

import Button from "../../../shared/components/Button/Button";

import { screenState } from "../../../recoil/state";

import "./BackButton.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BackButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("NoteMain");
  };

  return (
    <div className="BackButton-container">
      <Link to="/NoteMain">
        <Button content="< Back" handler={handleChangeScreen} />
      </Link>
    </div>
  );
};

export default BackButton;
