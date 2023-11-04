import { StyledButton } from './Button.styled';

const Button = ({ text, ...other }) => {
  return <StyledButton {...other}>{text}</StyledButton>;
};

export default Button;
