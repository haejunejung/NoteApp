import { useSetRecoilState } from "recoil";

import Button from "../../../shared/components/Button/Button";

import { screenState } from "../../../recoil/state";

import "./BackButton.css";

const BackButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("NoteMain");
  };

  return (
    <div className="BackButton-container">
      <Button content="< Back" handler={handleChangeScreen} />
    </div>
  );
};

export default BackButton;
