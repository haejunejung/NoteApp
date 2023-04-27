import { useSetRecoilState } from "recoil";

import { screenState } from "../../../recoil/state";

import Button from "../../../shared/components/Button/Button";

import "./CreateButton.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CreateButton = () => {
  const setScreen = useSetRecoilState(screenState);

  const handleChangeScreen = () => {
    setScreen("CreateNote");
  };

  return (
    <div className="CreateButton-container">
      <Link to="/CreateNote">
        <Button content="Create" handler={handleChangeScreen} />
      </Link>
    </div>
  );
};

export default CreateButton;
