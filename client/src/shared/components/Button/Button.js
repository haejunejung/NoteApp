import ButtonContainer from "react-bootstrap/Button";

const Button = (props) => {
  return (
    <ButtonContainer
      variant="secondary"
      className="Button-container"
      onClick={props.handler}
    >
      {props.content}
    </ButtonContainer>
  );
};

export default Button;
