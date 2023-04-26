import { useSetRecoilState } from "recoil";
import ButtonContainer from "../ButtonContainer";

import "./CreateButton.css";
import { screenState } from "../../../recoil/state";

const CreateButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("CreateNote");
  };

  return (
    <div className="CreateButton-container">
      <ButtonContainer content="Create" handler={handleChangeScreen} />
    </div>
  );
};

export default CreateButton;
