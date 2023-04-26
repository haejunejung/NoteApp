import { useSetRecoilState } from "recoil";
import ButtonContainer from "../ButtonContainer";

import "./DoneButton.css";
import { screenState } from "../../../recoil/state";

const DoneButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("NoteMain");
  };

  return (
    <div className="DoneButton-container">
      <ButtonContainer content="Done" handler={handleChangeScreen} />
    </div>
  );
};

export default DoneButton;
