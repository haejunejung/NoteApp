import Button from "react-bootstrap/Button";

const ButtonContainer = (props) => {
  return (
    <Button
      variant="secondary"
      className="Button-container"
      onClick={props.handler}
    >
      {props.content}
    </Button>
  );
};

export default ButtonContainer;
