import { useSetRecoilState } from "recoil";

import { screenState } from "../../../recoil/state";

import Button from "../../../shared/components/Button/Button";

import "./CreateButton.css";

const CreateButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("CreateNote");
  };

  return (
    <div className="CreateButton-container">
      <Button content="Create" handler={handleChangeScreen} />
    </div>
  );
};

export default CreateButton;
