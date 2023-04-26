import { useSetRecoilState } from "recoil";
import ButtonContainer from "../ButtonContainer";

import "./BackButton.css";
import { screenState } from "../../../recoil/state";

const BackButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("NoteMain");
  };

  return (
    <div className="BackButton-container">
      <ButtonContainer content="< Back" handler={handleChangeScreen} />
    </div>
  );
};

export default BackButton;
