import { useSetRecoilState } from "recoil";

import Button from "../../../shared/components/Button/Button";

import { screenState } from "../../../recoil/state";

import "./DoneButton.css";

const DoneButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("NoteMain");
  };

  return (
    <div className="DoneButton-container">
      <Button content="Done" handler={handleChangeScreen} />
    </div>
  );
};

export default DoneButton;
